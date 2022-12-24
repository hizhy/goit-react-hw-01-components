import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 600px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid gray;
`;

export const Head = styled.thead`
  height: 40px;
  background-color: aqua;
  border: 1px solid gray;
`;

export const DataCell = styled.td`
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  text-align: center;
  height: 35px;
`;

export const DataRow = styled.tr`
  &:nth-child(even) {
    background-color: #c9f0ea;
  }
`;
