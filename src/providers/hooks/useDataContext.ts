import { useContext } from "react";
import DataContext from "../contexts/DataContext";

export default function useDataContext() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("Component used within DataContext");
  }

  return context;
}
