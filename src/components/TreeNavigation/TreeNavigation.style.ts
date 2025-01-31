import styled from "@emotion/styled";

export const TreeNavigation = styled.div`
  display: flex;
  flex-grow: 1;

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

export const TreeNavigationForm = styled.form`
  width: 100%;
`;

export const TreeNavigationContent = styled.nav`
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
  align-items: center;

  .issues {
    color: indianred;
    font-size: 0.875rem;
  }

  &:hover {
    cursor: pointer;
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

  &[aria-current]:before {
    color: green;
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
  }
`;
