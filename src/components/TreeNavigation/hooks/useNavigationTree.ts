import { useEffect, useState } from "react";
import useDataContext from "../../../providers/hooks/useDataContext";
import {
  destructDataToTreeObject,
  destructTreeObjectToTree,
} from "../helpers/treeDestructionFunctions";
import { TreeItem } from "../types";

export default function useNavigationTree() {
  const { data, isLoading, error, currentPage, onSelectPage } =
    useDataContext();
  const [treeData, setTreeData] = useState<TreeItem[] | null>(null);

  useEffect(() => {
    if (!data) {
      setTreeData(null);
      return;
    }

    setTreeData(destructTreeObjectToTree(destructDataToTreeObject(data)));
  }, [data]);

  return {
    treeData,
    isLoading,
    error,
    currentPage,
    onSelectPage,
  };
}
