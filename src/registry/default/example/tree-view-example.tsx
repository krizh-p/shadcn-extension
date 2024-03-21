"use client";

import {
  Tree,
  Folder,
  File,
  CollapseButton,
} from "@/registry/default/extension/tree-view-api";

const TreeFileTest = () => {
  const elements = [
    {
      id: "1",
      isSelectable: true,
      name: "src",
      children: [
        {
          id: "2",
          isSelectable: true,
          name: "app.tsx",
        },
        {
          id: "3",
          isSelectable: true,
          name: "components",
          children: [
            {
              id: "20",
              isSelectable: true,
              name: "pages",
              children: [
                {
                  id: "21",
                  isSelectable: true,
                  name: "interface.ts",
                },
              ],
            },
          ],
        },
        {
          id: "6",
          isSelectable: true,
          name: "ui",
          children: [
            {
              id: "7",
              isSelectable: true,
              name: "carousel.tsx",
            },
          ],
        },
      ],
    },
  ];
  return (
    <Tree
      className="rounded-md h-52 max-w-96 w-full bg-background  overflow-hidden py-1"
      initialExpendedItems={["components"]}
      initialSelectedId="carousel.tsx"
      elements={elements}
    >
      <Folder element="src">
        <File element="app.tsx">
          <p> app.tsx </p>
        </File>
        <Folder element="components">
          <Folder element="pages">
            <File element="interface.ts">
              <p>interface.ts</p>
            </File>
          </Folder>
        </Folder>
        <Folder element="ui">
          <File element="carousel.tsx">
            <p>carousel.tsx</p>
          </File>
        </Folder>
      </Folder>
      <CollapseButton elements={elements} />
    </Tree>
  );
};

export default TreeFileTest;
