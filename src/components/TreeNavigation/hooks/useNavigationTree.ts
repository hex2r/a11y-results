import { useEffect, useState } from "react";
import useDataContext from "../../../providers/hooks/useDataContext";
import {
  destructureDataToTreeObject,
  destructureTreeObjectToTree,
} from "../helpers/treeDestructureFunctions";
import useFilteredTree from "./useFilteredTree";
import { TreeItem } from "../types";

export default function useNavigationTree() {
  const { data, isLoading, error, currentPage, onSelectPage } =
    useDataContext();

  // Todo: ts issue
  const { filter, input, onChange, onSubmit } = useFilteredTree(data);
  const [treeData, setTreeData] = useState<TreeItem[] | null>(null);

  useEffect(() => {
    if (!data) {
      setTreeData(null);
      return;
    }

    const filteredData = filter
      ? Object.fromEntries(
          Object.entries(data).filter(([url]) =>
            new URL(url).pathname.toLowerCase().includes(filter.toLowerCase())
          )
        )
      : data;

    console.dir(
      destructureTreeObjectToTree(
        data,
        destructureDataToTreeObject(filteredData)
      )
    );

    // TODO: ts type issue
    setTreeData(
      destructureTreeObjectToTree(
        data,
        destructureDataToTreeObject(filteredData)
      )
    );
  }, [data, filter]);

  return {
    treeData,
    isLoading,
    error,
    currentPage,
    onSelectPage,
    input,
    onChange,
    onSubmit,
  };
}
