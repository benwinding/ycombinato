type HasChildren = {
  children: HasChildren[];
};

export function sortChildren<T extends HasChildren>(story: T, opts: {
  byThreadLength: boolean;
  byResponseCount: boolean;
}): T {
  if (!story) {
    return story;
  }
  const storySorted: T = { ...story };

  if (opts.byThreadLength) {
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
    }
    const sortByThreadLength = (comment1: HasChildren, comment2: HasChildren): number => {
      return getDeepestChildLevel(0, comment2) - getDeepestChildLevel(0, comment1);
    }
    storySorted.children = storySorted.children.sort(sortByThreadLength)
  }
  if (opts.byResponseCount) {
    const sortByResponseCount = (comment1: HasChildren, comment2: HasChildren): number => {
      return comment2.children.length - comment1.children.length;
    }
    storySorted.children = storySorted.children.sort(sortByResponseCount)
  }
  return storySorted;
}
