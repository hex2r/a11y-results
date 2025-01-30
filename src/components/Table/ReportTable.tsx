import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as Styled from "./Table.style";
import useDataContext from "../../providers/hooks/useDataContext";
import { Typography } from "../ui";
import { columns } from "./ReportTableColumns";
import type { ReportDataItem } from "./types";

export default function ReportTable() {
  const { data, isLoading, currentPage } = useDataContext();
  const table = useReactTable({
    data: data ? (data[currentPage] as ReportDataItem[]) : [],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <Typography tag="span">Fetching...</Typography>;
  }

  if (!data) {
    return <Typography tag="span">No data</Typography>;
  }

  return (
    <Styled.TableContainer>
      <Styled.Table>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Styled.Th key={header.id}>
                {header.column.columnDef.header}
              </Styled.Th>
            ))}
          </tr>
        ))}
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Styled.Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Styled.Td>
            ))}
          </tr>
        ))}
      </Styled.Table>
    </Styled.TableContainer>
  );
}
