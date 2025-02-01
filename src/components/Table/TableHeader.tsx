import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { StyledControl, Typography } from "../ui";
import * as Styled from "./Table.style";
import TableFilters from "./TableFilters";

export default function TableHeader({
  column,
  columnFilters,
  setColumnFilters,
  getResizeHandler,
}) {
  return (
    <Styled.ThInnerWrapper>
      <Typography tag="span">{column.columnDef.header}</Typography>
      {column.getCanSort() && (
        <>
          <StyledControl
            $size="small"
            $view="secondary"
            aria-pressed="mixed"
            aria-label={`Sort, ${column.columnDef.header}, currently is ${
              column.getIsSorted() || "unsorted"
            }`}
            onClick={column.getToggleSortingHandler()}
          >
            {column.getIsSorted() ? (
              column.getIsSorted() === "asc" ? (
                <ArrowUpwardOutlinedIcon fontSize="small" />
              ) : (
                <ArrowDownwardOutlinedIcon fontSize="small" />
              )
            ) : (
              <SwapVertOutlinedIcon fontSize="small" />
            )}
          </StyledControl>
          {column.getCanFilter() && (
            <TableFilters
              placeholder={`Filter ${column.columnDef.header}`}
              filterId={column.id}
              columnFilters={columnFilters}
              setColumnFilters={setColumnFilters}
            />
          )}
        </>
      )}
      <div onMouseDown={getResizeHandler()} className="resize-handler" />
    </Styled.ThInnerWrapper>
  );
}
