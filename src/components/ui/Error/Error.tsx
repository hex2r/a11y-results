import * as Styled from "./Error.style";
import { Typography } from "../Typography";

type Error = {
  message: string;
  onReset?: () => void;
};

export default function Error({ message, onReset }: Error) {
  return (
    <Styled.Error>
      <div className="sr-only" aria-live="assertive">
        Error. {message}
      </div>
      <Typography tag="h3">Error</Typography>
      <Typography tag="p">{message}</Typography>
      {onReset && <button onClick={onReset}>Reset</button>}
    </Styled.Error>
  );
}
