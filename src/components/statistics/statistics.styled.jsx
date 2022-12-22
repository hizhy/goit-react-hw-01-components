import styled from 'styled-components';

export const Statsection = styled.section`
  width: 400px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: beige;
  box-shadow: 3px 3px 8px 3px #000000;
`;

export const Name = styled.h2`
  padding: 20px 0;
  text-align: center;
  color: gray;
`;

export const Statlist = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  padding: 10px;
  border: 1px solid blue;
`;

export const Label = styled.span`
  color: blue;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  color: blue;
  font-size: 20px;
`;
