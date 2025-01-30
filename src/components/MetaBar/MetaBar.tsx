import { Container } from "../Template";
import { Typography } from "../ui/Typography";

// Todo: temporary solution
const META_INFO = "ynet-100Nov, 23, 2020 11:16:58";

export default function MetaBar() {
  return (
    <Container>
      <Typography tag="span">{META_INFO}</Typography>
    </Container>
  );
}
