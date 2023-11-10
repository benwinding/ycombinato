import { sortChildren } from "./sorter";

type SimpleTreeRoot = SimpleTreeNode[];
type SimpleTreeNode = [number, SimpleTreeNode[]] | [number];

type ChildrenObjRoot = {
  id: number;
  children: ChildrenObjNode[];
};
type ChildrenObjNode = {
  id: number;
  value: number;
  children: ChildrenObjNode[];
};

describe("sortStory", () => {
  it("sorts stories byResponseCount", () => {
    const res = sortChildren(
      convertSimpleTree([
        [2], //
        [10, [[11], [12]]], //
        [3], //
      ]),
      {
        byResponseCount: true,
        byThreadDepth: false,
        idTotalMap: new Map<number, number>([
          [2, 1],
          [10, 2],
          [3, 1],
        ]),
      }
    );
    expect<ChildrenObjRoot>(res).toMatchObject(
      convertSimpleTree([
        [10, [[11], [12]]], //
        [2], //
        [3], //
      ])
    );
  });
  it("sorts stories byThreadDepth", () => {
    const res = sortChildren(
      convertSimpleTree([
        [1, [[11]]], //
        [2, [[11, [[111]]]]], //
        [3], //
      ]),
      {
        byResponseCount: false,
        byThreadDepth: true,
        idTotalMap: new Map<number, number>([
          [2, 1],
          [10, 2],
          [3, 1],
        ]),
      }
    );
    expect<ChildrenObjRoot>(res).toMatchObject(
      convertSimpleTree([
        [2, [[11, [[111]]]]], //
        [1, [[11]]], //
        [3], //
      ])
    );
  });
  it("sorts stories byThreadDepth sorts nested children too", () => {
    const res = sortChildren(
      convertSimpleTree([
        [
          2,
          [
            [11], //
            [11, [[111]]], //
          ],
        ],
        [2],
      ]),
      {
        byResponseCount: false,
        byThreadDepth: true,
        idTotalMap: new Map<number, number>([
          [2, 1],
          [10, 2],
          [3, 1],
        ]),
      }
    );
    expect<ChildrenObjRoot>(res).toMatchObject(
      convertSimpleTree([
        [
          2,
          [
            [11, [[111]]], //
            [11], //
          ],
        ],
        [2],
      ])
    );
  });
});

function convertSimpleTree(simpleRoot: SimpleTreeRoot): ChildrenObjRoot {
  const root: ChildrenObjRoot = { id: 999999, children: [] };

  function buildTree(
    node: ChildrenObjRoot,
    data: SimpleTreeNode[]
  ): ChildrenObjNode[] {
    for (let i = 0; i < data.length; i++) {
      const [value, children] = data[i];
      const newNode: ChildrenObjNode = { value, id: value, children: [] };
      newNode.children = buildTree(newNode, children || []);
      node.children.push(newNode);
    }
    return node.children;
  }

  root.children = buildTree(root, simpleRoot);

  return root;
}
