import TreeNavigation from "./TreeNavigation";
import useNavigationTree from "./hooks/useNavigationTree";
import { Typography } from "../ui";

export default function PrimaryTreeNavigation() {
  const { treeData, isLoading, onSelectPage, currentPage, onChange, onSubmit } =
    useNavigationTree();

  if (isLoading) {
    return <Typography tag="span">Building Tree...</Typography>;
  }

  if (!treeData) {
    return <Typography tag="span">No data found</Typography>;
  }

  return (
    <TreeNavigation
      items={treeData}
      onSelectPage={onSelectPage}
      currentPage={currentPage}
      onFilterChange={onChange}
      onFilterSubmit={onSubmit}
    />
  );
}
