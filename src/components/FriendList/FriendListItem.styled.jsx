import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: beige;
  box-shadow: 3px 3px 9px 3px #000000;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;
`;
export const IsOffline = styled.span`
  background-color: red;
`;

export const IsOnline = styled.span`
  background-color: green;
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
