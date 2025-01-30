import type { PropsWithChildren } from "react";
import { Grid } from "../ui/Grid";

type PrimaryNavigation = {
  label: string;
} & PropsWithChildren;

export default function PrimaryNavigation({
  label,
  children,
}: PrimaryNavigation) {
  return (
    <nav aria-label={label}>
      <Grid as="ul" $gap={1}>
        {children}
      </Grid>
    </nav>
  );
}

PrimaryNavigation.Item = function ({ children }: PropsWithChildren) {
  return <li>{children}</li>;
};
