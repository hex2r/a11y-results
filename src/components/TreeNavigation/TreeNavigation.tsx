import {
  useState,
  MouseEvent,
  PropsWithChildren,
  ChangeEvent,
  FormEvent,
} from "react";
import * as Styled from "./TreeNavigation.style";
import type { TreeItem } from "./types";
import { InputField, Grid, GridItem } from "../ui";

type TreeNavigation = {
  items: TreeItem[];
  role?: "tree" | "group";
  onSelectPage: (url: string) => void;
  currentPage: string;
};

type FilteredTreeNavigation = {
  onFilterSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function TreeNavigation({
  items = [],
  onSelectPage,
  currentPage,
  role = "tree",
  onFilterChange,
  onFilterSubmit,
}: TreeNavigation & FilteredTreeNavigation) {
  return (
    <Styled.TreeNavigation>
      <Grid $flexDirection="column" $gap={1}>
        <GridItem>
          <FilterTree onChange={onFilterChange} onSubmit={onFilterSubmit} />
        </GridItem>
        <GridItem $flexDirection="column">
          <Styled.TreeNavigationContent aria-label="Tree">
            <BaseTreeNavigation
              items={items}
              onSelectPage={onSelectPage}
              currentPage={currentPage}
              role={role}
            />
          </Styled.TreeNavigationContent>
        </GridItem>
      </Grid>
    </Styled.TreeNavigation>
  );
}

type FilterTree = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function FilterTree({ onSubmit, onChange }: FilterTree) {
  return (
    <Styled.TreeNavigationForm onSubmit={onSubmit}>
      <InputField
        type="text"
        placeholder="Filter Tree..."
        onChange={onChange}
      />
      <input type="submit" hidden />
    </Styled.TreeNavigationForm>
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
          as="button"
          role="treeitem"
          aria-label={item.path}
          aria-expanded={hasChildren && isExpanded}
          onClick={toggleExpanded}
        >
          {label}
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
