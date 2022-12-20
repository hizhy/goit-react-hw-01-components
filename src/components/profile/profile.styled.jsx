import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;

  overflow: hidden;
  border-radius: 20px;
  background-color: beige;
  border: 1px solid gray;
`;

export const Descr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 200px;
  margin-bottom: 30px;
  border-radius: 50%;
  background-color: aquamarine;
`;

export const Name = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const Tag = styled.p`
  margin-bottom: 15px;
  color: gray;
`;

export const Location = styled.p`
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: bisque;
  border-top: 1px solid gray;
`;

export const Elem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.3%;
  padding: 10px 0;
  &:not(:last-of-type) {
    border-right: 1px solid gray;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

export const Qty = styled.span`
  font-weight: bold;
`;
