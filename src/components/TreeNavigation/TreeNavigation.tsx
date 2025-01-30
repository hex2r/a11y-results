import { useState, MouseEvent, PropsWithChildren } from "react";
import * as Styled from "./TreeNavigation.style";
import type { TreeItem } from "./types";

type TreeNavigation = {
  items: TreeItem[];
  role: "tree" | "group";
  onSelectPage: (url: string) => void;
  currentPage: string;
};

export default function TreeNavigation({
  items = [],
  onSelectPage,
  currentPage,
  role = "tree",
}: TreeNavigation) {
  return (
    <Styled.TreeNavigation aria-label="Tree">
      <BaseTreeNavigation
        items={items}
        onSelectPage={onSelectPage}
        currentPage={currentPage}
        role={role}
      />
    </Styled.TreeNavigation>
  );
}

function BaseTreeNavigation({
  items = [],
  onSelectPage,
  currentPage,
  role = "tree",
}: TreeNavigation) {
  return (
    <Styled.TreeList role={role}>
      {items.map((item) => (
        <TreeNavigationItem
          key={item.path}
          item={item}
          onSelectPage={onSelectPage}
          currentPage={currentPage}
        />
      ))}
    </Styled.TreeList>
  );
}

type TreeNavigationItem = {
  item: TreeItem;
  onSelectPage: (url: string) => void;
  currentPage: string;
};

function TreeNavigationItem({
  item,
  onSelectPage,
  currentPage,
}: TreeNavigationItem) {
  const [isExpanded, setExpanded] = useState<boolean>(item?.expanded || false);

  const { label, url, children } = item;
  const hasChildren = children && children.length > 0;

  const toggleExpanded = () => {
    setExpanded((state) => !state);
  };

  return (
    <Styled.TreeListItem role="none">
      {url ? (
        <TreeNavigationLink
          ariaLabel={item.path}
          currentPage={currentPage}
          // Todo: use origin from .env
          url={`http://localhost:5173/?q=${encodeURIComponent(url)}`}
          onSelectPage={onSelectPage}
        >
          {label}
        </TreeNavigationLink>
      ) : (
        <Styled.TreeItem
          aria-label={item.path}
          as="button"
          role="treeitem"
          aria-expanded={hasChildren && isExpanded}
          onClick={toggleExpanded}
        >
          <span>{label}</span>
        </Styled.TreeItem>
      )}
      {hasChildren && isExpanded && (
        <BaseTreeNavigation
          role="group"
          items={children}
          currentPage={currentPage}
          onSelectPage={onSelectPage}
        />
      )}
    </Styled.TreeListItem>
  );
}

type TreeNavigationLink = {
  url: string;
  ariaLabel: string;
  onSelectPage: (url: string) => void;
  currentPage: string;
} & PropsWithChildren;

function TreeNavigationLink({
  url,
  children,
  ariaLabel,
  currentPage,
  onSelectPage,
}: TreeNavigationLink) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    history.pushState("/", "", url);
    onSelectPage(new URL(url).searchParams.get("q") || "");
  };

  return (
    <Styled.TreeItem
      as="a"
      role="treeitem"
      href={url}
      aria-label={ariaLabel}
      aria-current={
        currentPage ===
        decodeURIComponent(new URL(url).searchParams.get("q") || "")
          ? "page"
          : undefined
      }
      onClick={handleClick}
    >
      {children}
    </Styled.TreeItem>
  );
}
