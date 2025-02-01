import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as Styled from "./Table.style";
import { Typography } from "../ui";
import { columns } from "./ReportTableColumns";
import type { ReportDataItem } from "./types";
import TableHeader from "./TableHeader";

type ReportTable = {
  data: ReportDataItem[];
  isLoading: boolean;
};

export default function ReportTable({ data, isLoading }: ReportTable) {
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: "onChange",
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
      <Styled.Table style={{ width: table.getTotalSize() }}>
        <thead>
          {table.getHeaderGroups().map(({ id, headers }) => (
            <tr key={id}>
              {headers.map(({ id, column, getSize, getResizeHandler }) => (
                <Styled.Th key={id} scope="col" style={{ width: getSize() }}>
                  <TableHeader
                    column={column}
                    getResizeHandler={getResizeHandler}
                    columnFilters={columnFilters}
                    setColumnFilters={setColumnFilters}
                  />
                </Styled.Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map(({ id, column, getContext }) => (
                <Styled.Td key={id} style={{ width: column.getSize() }}>
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
