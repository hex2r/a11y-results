export type TreeObject = {
  [labelAndSeparatedPath: string]: TreeObject | string;
};

export type TreeItem = {
  path: string;
  label: string;
  expanded?: boolean;
  url?: string;
  children: TreeItem[];
};
