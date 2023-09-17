import styled from 'styled-components';

export const Container = styled.div`
  height: 76%;
  width: 30%;
  background-color: ${({ color }) => color};
  border-radius: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
