import { Container } from "../Template";
import { Logo } from "../Logo";
import { Typography } from "../ui/Typography";
import { PrimaryNavigation } from "../Navigation";
import { StyledControl } from "../ui/Control";
import { Grid, GridItem } from "../ui/Grid";
import * as Styled from "./Header.style";
import LogoutIcon from "@mui/icons-material/Logout";

// Todo: move to constants
const ENV = "Production Monitoring Dev";
// Todo: move to app config
const LOGOUT_URL = "#";

export default function Header() {
  return (
    <Styled.Header>
      <Container>
        <Styled.HeaderSkipLinks>
          <a href="#navbar">Skip to Navigation</a>
          <a href="#main">Skip to Main</a>
        </Styled.HeaderSkipLinks>
        <Grid $gap={1} $justifyContent="space-between">
          <GridItem $alignItems="center">
            <Logo />
          </GridItem>
          <GridItem $flexGrow={1} $alignItems="center">
            <Typography cropped tag="div" cx={{ paddingLeft: "3rem" }}>
              {ENV}
            </Typography>
          </GridItem>
          <GridItem $alignItems="center">
            <PrimaryNavigation label="Primary">
              <PrimaryNavigation.Item>
                <StyledControl as="a" $view="secondary" href={LOGOUT_URL}>
                  <LogoutIcon />
                  <Typography tag="span">Logout</Typography>
                </StyledControl>
              </PrimaryNavigation.Item>
            </PrimaryNavigation>
          </GridItem>
        </Grid>
      </Container>
    </Styled.Header>
  );
}
