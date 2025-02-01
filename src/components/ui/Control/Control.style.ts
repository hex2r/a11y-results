import styled from "@emotion/styled";

// Todo: create component Control
export const Control = styled.button<{
  /** Set button view. primary is default value */
  $view?: "primary" | "secondary" | "default";
  $size?: "small" | "medium";
}>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-decoration: none;

  ${({ $view }) =>
    $view === "secondary"
      ? `
    // color: #6c9694;
    color: #ccc;
    background: none;
    border: none;

    &:hover {
    color: #e5e5e5;
    cursor: pointer;
      // color: #82aba8;
    }

    &:active {
      // color: #628583;

    }
    `
      : ``}
`;
