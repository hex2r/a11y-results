import { Panel } from "../ui/Panel";
import { Table } from "../Table";
import useDataContext from "../../providers/hooks/useDataContext";

export default function Main() {
  const { isLoading, data, currentPage } = useDataContext();
  const isInvalidURL =
    data &&
    !data[currentPage] &&
    new URL(window.location.href).searchParams.get("q");

  if (isInvalidURL) {
    throw new Error("Bad URL");
  }

  return (
    <>
      <Panel label={currentPage || "Page"}>
        {<Table isLoading={isLoading} data={data ? data[currentPage] : []} />}
      </Panel>
    </>
  );
}
