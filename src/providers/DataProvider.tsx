import { useState, PropsWithChildren } from "react";
import DataContext from "./contexts/DataContext";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { data as dbData } from "../../db";

export default function DataProvider({ children }: PropsWithChildren) {
  const [currentPage, setCurrentPage] = useState<string>(
    new URL(window.location.href).searchParams.get("q") || ""
  );
  const { data, isFetched, error } = useQuery({
    queryKey: ["data"],
    initialData: null,
    // Todo: replace to using fake fetch function from api
    queryFn: async () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(dbData);
        }, 300)
      ),
    placeholderData: keepPreviousData,
  });

  const onSelectPage = (url: string) => {
    setCurrentPage(url);
  };

  return (
    <DataContext.Provider
      value={{ data, error, isLoading: !isFetched, onSelectPage, currentPage }}
    >
      {children}
    </DataContext.Provider>
  );
}
