import { ReportDataItem } from "../../Table/types";
import type { TreeItem, TreeObject } from "../types";
import { isObject, isEmpty } from "lodash-es";

/** Used to separate path and label */
const __SEPARATOR__ = "__:__";

function destructureToTreeObject({
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
    const key = `${currentPathLabel}${__SEPARATOR__}${path}/${currentPathLabel}${__SEPARATOR__}`;

    if (!currentPathLabel) {
      return destructureToTreeObject({
        acc,
        url,
        pathname: nextPathname.join("/"),
        path,
      });
    }

    if (key in acc) {
      return {
        [key]: {
          ...(acc[key] as object),
          ...destructureToTreeObject({
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
          [key]: destructureToTreeObject({
            acc,
            url,
            pathname: nextPathname.join("/"),
            path: `${path}/${currentPathLabel}`,
          }),
        }
      : ({
          [key]: url,
        } satisfies TreeObject);
  } else return acc;
}

export function parseTreeItem(itemLabel: string) {
  const [label, path, issues] = itemLabel.split(__SEPARATOR__);

  return {
    path,
    label,
    issues,
  };
}

// Todo: move from here
type Data = {
  [url: string]: ReportDataItem[];
};

export function destructureDataToTreeObject(
  data: Data,
  root = "root"
): TreeObject {
  return {
    [`${root}${isEmpty(data) ? " (empty)" : ""}${__SEPARATOR__}${root}`]:
      Object.entries(data).reduce((acc, [url]) => {
        return {
          ...acc,
          ...destructureToTreeObject({
            acc,
            url,
            pathname: new URL(url).pathname,
            path: root,
          }),
        };
      }, {}),
  };
}

export function destructureTreeObjectToTree(
  data: Data,
  treeObject: TreeObject
): TreeItem[] {
  return Object.entries(treeObject).reduce<TreeItem[]>(
    (acc, [label, children]) => {
      return [
        ...acc,
        {
          ...parseTreeItem(label),
          expanded: true,
          ...(isObject(children)
            ? { children: destructureTreeObjectToTree(data, children) }
            : {
                url: children,
                issues: data[children].length || 0,
              }),
        } as TreeItem,
      ] as TreeItem[];
    },
    []
  );
}
