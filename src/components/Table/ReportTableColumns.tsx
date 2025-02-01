import { Typography } from "../ui";

export const columns = [
  {
    accessorKey: "severity",
    header: "Severity",
    enableColumnFilter: false,
    size: 100,
    cell: (props) => <Typography tag="span">{props.getValue()}</Typography>,
  },
  {
    accessorKey: "type",
    header: "Type",
    size: 220,
    cell: (props) => (
      <Typography cropped tag="span">
        {props.getValue()}
      </Typography>
    ),
  },
  {
    accessorKey: "component",
    header: "Component",
    size: 220,
    cell: (props) => <Typography tag="span">{props.getValue()}</Typography>,
  },
  {
    accessorKey: "selector",
    header: "Selector",
    size: 230,
    cell: (props) => <Typography tag="span">{props.getValue()}</Typography>,
  },
];
