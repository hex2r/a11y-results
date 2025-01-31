import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as Styled from "./Table.style";
import { Typography } from "../ui";
import { columns } from "./ReportTableColumns";
import type { ReportDataItem } from "./types";

type ReportTable = {
  data: ReportDataItem[];
  isLoading: boolean;
};

export default function ReportTable({ data, isLoading }: ReportTable) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const hasData = data && data.length > 0;

  if (isLoading) {
    return <Typography tag="span">Fetching...</Typography>;
  }

  if (!hasData) {
    return <Typography tag="span">No data</Typography>;
  }

  return (
    <Styled.TableContainer>
      <Styled.Table>
        <thead>
          {table.getHeaderGroups().map(({ id, headers }) => (
            <tr key={id}>
              {headers.map(({ id, column }) => (
                <Styled.Th key={id} scope="col">
                  {column.columnDef.header}
                </Styled.Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map(({ id, column, getContext }) => (
                <Styled.Td key={id}>
                  {flexRender(column.columnDef.cell, getContext())}
                </Styled.Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.TableContainer>
  );
}
