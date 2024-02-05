import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 30%;
  background-color: ${({ color }) => color};
  border-radius: 18px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
