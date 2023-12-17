type HasChildren = {
  id: number;
  children: HasChildren[];
};

function superNaiveDeepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

type SortChildrenOpts<T> = {
  idTotalMap: Map<number, number>;
  byThreadDepth: boolean;
  byResponseCount: boolean;
  onNextFound?: (child: T, next: T) => void;
  onPrevFound?: (child: T, prev: T) => void;
};

export function sortChildren<T extends HasChildren>(
  story: T,
  opts: SortChildrenOpts<T>
): T {
  if (!story) {
    return story;
  }
  const storySorted = superNaiveDeepClone<T>(story);
  const recursiveSort = (
    node: HasChildren,
    sortFn: CommentSortFunction
  ): HasChildren[] => {
    node.children.sort(sortFn);
    node.children.forEach((child, childIndex) => {
      {
        // Determining next sibling id
        const next = node.children[childIndex + 1];
        next != null && opts.onNextFound?.(child as T, next as T);
      }
      {
        // Determining prev sibling id
        const prev = node.children[childIndex - 1];
        prev != null && opts.onPrevFound?.(child as T, prev as T);
      }
      recursiveSort(child, sortFn);
    });
    return node.children;
  };
  console.time("sort timer");
  const sortFn = getSortFunction(opts);
  storySorted.children = recursiveSort(storySorted, sortFn);
  console.timeEnd("sort timer");
  return storySorted;
}

function getSortFunction<T>(opts: SortChildrenOpts<T>): CommentSortFunction {
  if (opts.byThreadDepth) {
    return sortbyThreadDepthFn;
  }
  if (opts.byResponseCount) {
    return createSortByResponseCount(opts);
  }
  return createNoOp(opts);
}

type CommentSortFunction = (
  comment1: HasChildren,
  comment2: HasChildren
) => number;

const getDeepestChildLevel = (count: number, comment: HasChildren): number => {
  const children = comment.children || [];
  if (!children.length) {
    return count;
  }
  const deepestChildCount = children.reduce((acc, cur) => {
    const deepCount = getDeepestChildLevel(count + 1, cur);
    if (deepCount > acc) {
      return deepCount;
    }
    return acc;
  }, 0);
  return deepestChildCount;
};
const sortbyThreadDepthFn: CommentSortFunction = (
  comment1: HasChildren,
  comment2: HasChildren
): number => {
  return getDeepestChildLevel(0, comment2) - getDeepestChildLevel(0, comment1);
};
const createSortByResponseCount = <T>(opts: SortChildrenOpts<T>) => {
  const sortByResponseCount: CommentSortFunction = (
    comment1: HasChildren,
    comment2: HasChildren
  ): number => {
    return (
      (opts.idTotalMap.get(comment2.id) || 0) -
      (opts.idTotalMap.get(comment1.id) || 0)
    );
  };
  return sortByResponseCount;
};

const createNoOp = <T>(opts: SortChildrenOpts<T>): CommentSortFunction => {
  return (a, b) => 0;
};
