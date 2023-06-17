type HasChildren = {
  children: HasChildren[];
};

export function sortChildren<T extends HasChildren>(
  story: T,
  opts: {
    byThreadDepth: boolean;
    byResponseCount: boolean;
  }
): T {
  if (!story) {
    return story;
  }
  const storySorted: T = { ...story };

  if (opts.byThreadDepth) {
    const getDeepestChildLevel = (
      count: number,
      comment: HasChildren
    ): number => {
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
    const recursiveSortbyThreadDepth = (
      comment1: HasChildren,
      comment2: HasChildren
    ): number => {
      return (
        getDeepestChildLevel(0, comment2) - getDeepestChildLevel(0, comment1)
      );
    };
    const recursiveSort = (node: HasChildren): HasChildren[] => {
      node.children.sort(recursiveSortbyThreadDepth);
      node.children.forEach((child) => {
        recursiveSort(child);
      });
      return node.children;
    }
    console.time('sort byThreadDepth');
    storySorted.children = recursiveSort(storySorted);
    console.timeEnd('sort byThreadDepth');
  }
  if (opts.byResponseCount) {
    const sortByResponseCount = (
      comment1: HasChildren,
      comment2: HasChildren
    ): number => {
      return comment2.children.length - comment1.children.length;
    };
    console.time('sort byResponseCount');
    storySorted.children = storySorted.children.sort(sortByResponseCount);
    console.timeEnd('sort byResponseCount');
  }
  return storySorted;
}
