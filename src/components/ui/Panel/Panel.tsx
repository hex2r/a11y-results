import { PropsWithChildren } from "react";
import { Grid, GridItem } from "../Grid";
import { Typography } from "../Typography";
import { Separator } from "../Separator";
import * as Styled from "./Panel.style";

type Panel = {
  label: string;
} & PropsWithChildren;

export default function Panel({ label, children }: Panel) {
  return (
    <Styled.Panel>
      <Grid $flexDirection="column">
        <GridItem $offsetX={1.5} $offsetY={1}>
          <Typography cropped tag="h6">
            {label}
          </Typography>
        </GridItem>
        <GridItem>
          <Separator />
        </GridItem>
        <GridItem $flexGrow={1} $overflow>
          <Styled.PanelBody>
            <Styled.PanelContent>{children}</Styled.PanelContent>
          </Styled.PanelBody>
        </GridItem>
      </Grid>
    </Styled.Panel>
  );
}
