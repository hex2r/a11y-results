import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: #3a3c40;
  color: #e3e3e3;
`;

export const HeaderSkipLinks = styled.header`
  position: fixed;
  top: 60px;
  left: 0;

  a {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  a:focus {
    position: static;
    width: auto;
    height: auto;
  }
`;
