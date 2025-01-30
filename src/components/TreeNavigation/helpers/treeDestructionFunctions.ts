import type { TreeItem, TreeObject } from "../types";
import { isObject } from "lodash-es";

/** Used to separate path and label */
const __SEPARATOR__ = "__:__";

function destructToTreeObject({
  acc = { root: { empty: "#" } },
  url,
  pathname,
  path,
}: {
  acc: TreeObject;
  url: string;
  pathname: string;
  path: string;
}): TreeObject {
  const splittedPathname: string[] = pathname.split("/");

  if (splittedPathname.length > 0) {
    const currentPathLabel = splittedPathname[0];
    const nextPathname = splittedPathname.slice(1, splittedPathname.length);
    const hasNextPathname = nextPathname.length > 0;

    if (!currentPathLabel) {
      return destructToTreeObject({
        acc,
        url,
        pathname: nextPathname.join("/"),
        path,
      });
    }

    if (
      `${currentPathLabel}${__SEPARATOR__}${path}/${currentPathLabel}` in acc
    ) {
      return {
        [`${currentPathLabel}${__SEPARATOR__}${path}/${currentPathLabel}`]: {
          ...(acc[
            `${currentPathLabel}${__SEPARATOR__}${path}/${currentPathLabel}`
          ] as object),
          ...destructToTreeObject({
            acc,
            url,
            pathname: nextPathname.join("/"),
            path: `${path}/${currentPathLabel}`,
          }),
        },
      } satisfies TreeObject;
    }

    return hasNextPathname
      ? {
          [`${currentPathLabel}${__SEPARATOR__}${path}/${currentPathLabel}`]:
            destructToTreeObject({
              acc,
              url,
              pathname: nextPathname.join("/"),
              path: `${path}/${currentPathLabel}`,
            }),
        }
      : ({
          [`${currentPathLabel}${__SEPARATOR__}${path}/${currentPathLabel}`]:
            url,
        } satisfies TreeObject);
  } else return acc;
}

export function parseTreeItem(itemLabel: string) {
  const [label, path] = itemLabel.split(__SEPARATOR__);

  return {
    path,
    label,
  };
}

export function destructDataToTreeObject(
  data: TreeObject,
  root = "root"
): TreeObject {
  return {
    [`${root}${__SEPARATOR__}${root}`]: Object.entries(data).reduce(
      (acc, [url]) => {
        return {
          ...acc,
          ...destructToTreeObject({
            acc,
            url,
            pathname: new URL(url).pathname,
            path: root,
          }),
        };
      },
      {}
    ),
  };
}

export function destructTreeObjectToTree(treeObject: TreeObject): TreeItem[] {
  return Object.entries(treeObject).reduce<TreeItem[]>(
    (acc, [label, children]) => {
      return [
        ...acc,
        {
          ...parseTreeItem(label),
          expanded: true,
          ...(isObject(children)
            ? { children: destructTreeObjectToTree(children) }
            : { url: children }),
        } as TreeItem,
      ] as TreeItem[];
    },
    []
  );
}
