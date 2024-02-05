import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 1rem;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #000;
`;

export const WarningCard = styled.div`
  height: 100%;
  width: 80%;
  background-color: #fff;
  border-radius: 18px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const TokenButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  background-color: #2e8b57;
  min-width: 18rem;

  &:hover {
    background-color: #1f6140;
  }

  &:active {
    background-color: #15432d;
  }
`;

export const RegisterButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  background-color: #ffd700;
  min-width: 18rem;

  &:hover {
    background-color: #cca800;
  }

  &:active {
    background-color: #b28d00;
  }

  &:disabled {
    background-color: #b28d00;
    cursor: not-allowed;
  }
`;

export const DeleteButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  background-color: #ff3333;
  min-width: 18rem;

  &:hover {
    background-color: #cc0000;
  }

  &:active {
    background-color: #990000;
  }
`;
