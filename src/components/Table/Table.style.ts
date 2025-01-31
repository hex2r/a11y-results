import styled from "@emotion/styled";

export const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Table = styled.table<{ $fixed?: boolean }>`
  width: 100%;
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
`;

export const Td = styled.td`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;
