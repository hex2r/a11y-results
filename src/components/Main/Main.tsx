import type { PropsWithChildren } from "react";
import { Panel } from "../ui/Panel";
import { Table } from "../Table";

export default function Main({ children }: PropsWithChildren) {
  return (
    <>
      <Panel label="articles">{<Table />}</Panel>
    </>
  );
}
