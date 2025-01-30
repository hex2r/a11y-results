import * as Styled from "./Logo.style";

export default function Logo() {
  return (
    <a href="/">
      <Styled.LogoImage src="/logo.jpeg" alt="Logo" />
    </a>
  );
}
