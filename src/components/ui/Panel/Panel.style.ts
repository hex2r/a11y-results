import styled from "@emotion/styled";

export const Panel = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  border-radius: inherit;
  overflow: hidden;
`;

export const PanelBody = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  padding: 1.5rem 1.5rem;
  box-sizing: border-box;
  align-items: flex-start;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;

  &:focus {
    box-shadow: 0 0 2px red inset;
  }
`;

export const PanelContent = styled.div`
  margin-bottom: auto;
  width: 100%;
  flex-grow: 1;
`;
