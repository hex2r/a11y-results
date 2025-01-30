import styled from "@emotion/styled";

export const Control = styled.base<{
  /** Set button view. primary is default value */
  $view?: "primary" | "secondary";
}>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-decoration: none;

  ${({ $view }) =>
    $view === "secondary"
      ? `
    color: #6c9694;

    &:hover {
      color: #82aba8;
    }

    &:active {
      color: #628583;
    }
    `
      : ``}
`;
