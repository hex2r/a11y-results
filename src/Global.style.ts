import { css } from "@emotion/react";

export const globalCSS = css`
  :root {
    --default-font-family: Arial, sans-serif;
  }

  body {
    margin: 0;
    font-family: var(--default-font-family);
    background-color: #e3e3e3;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  #root {
    display: flex;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  input:focus-visible,
  a:focus-visible,
  button:focus-visible,
  [tabindex]:focus-visible {
    z-index: 2;
    outline: none;
    box-shadow: 0 0 0 2px rgb(0, 95, 204);
  }
`;
