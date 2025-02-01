import styled from "@emotion/styled";

export const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Table = styled.table<{ $fixed?: boolean }>`
  border-collapse: collapse;
  text-align: left;
  ${({ $fixed }) => ($fixed ? `table-layout: fixed;` : ``)}
`;

export const Th = styled.th`
  padding: 0.5rem 1rem;
  background-color: #3a3c40;
  border: 1px solid #3a3c40;
  color: #fff;
  font-weight: normal;
  font-size: 1rem;
  position: relative;

  &:hover .resize-handler {
    opacity: 1;
  }

  .resize-handler {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 0.125rem;
    background: #222;
    cursor: col-resize;
    opacity: 0;
    user-select: none;

    &:active {
      opacity: 1;
    }
  }
`;

export const ThInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Td = styled.td`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;
