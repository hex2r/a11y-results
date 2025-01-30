import styled from "@emotion/styled";

export const TreeNavigation = styled.nav`
  > ul {
    border-left: 0;
    margin-left: 0;

    > li {
      padding-left: 0;

      > [aria-expanded]:after {
        display: none;
      }
    }
  }
`;

export const TreeList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: 1.25rem;
  padding-left: 0;
  border-left: 1px solid #ccc;
`;

export const TreeListItem = styled.li`
  padding-left: 0.5rem;
`;

export const TreeItem = styled.a`
  position: relative;
  appearance: none;
  background: none;
  border: none;
  font-size: 1rem;
  padding: 0.25rem;
  white-space: nowrap;
  display: inline-flex;
  min-width: 100%;
  text-decoration: none;
  border-radius: 0.25rem;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    z-index: 2;
    outline: none;
    box-shadow: 0 0 0 2px rgb(0, 95, 204);
  }

  &,
  &:visited {
    color: #333;
  }

  &:before {
    content: "•";
    color: #ccc;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    text-align: center;
    overflow: hidden;
  }

  &:after {
    content: "";
    display: inline-block;
    width: 0.5rem;
    position: absolute;
    z-index: 0;
    top: calc(50% - 1px);
    left: calc(-0.5rem - 1px);
    background: rgba(255, 0, 0, 0.25);
    border-top: 1px solid #ccc;
    pointer-events: none;
  }

  &[aria-expanded="true"]:before {
    content: "-";
    color: darkred;
  }

  &[aria-expanded="false"]:before {
    content: "+";
    color: darkgreen;
  }

  &[aria-current="page"] {
    border-color: #666;
    background: #fff;
  }
`;
