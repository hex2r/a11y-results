export type TreeObject = {
  [labelAndSeparatedPath: string]: TreeObject | string;
};

export type TreeItem = {
  path: string;
  label: string;
  issues?: number;
  expanded?: boolean;
  url?: string;
  children: TreeItem[];
};
