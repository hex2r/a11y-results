import { Typography } from "../ui";

export const columns = [
  {
    accessorKey: "severity",
    header: "Severity",
    cell: (props) => <Typography tag="span">{props.getValue()}</Typography>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (props) => <Typography tag="span">{props.getValue()}</Typography>,
  },
  {
    accessorKey: "component",
    header: "Component",
    cell: (props) => <Typography tag="span">{props.getValue()}</Typography>,
  },
  {
    accessorKey: "selector",
    header: "Selector",
    cell: (props) => <Typography tag="span">{props.getValue()}</Typography>,
  },
];
