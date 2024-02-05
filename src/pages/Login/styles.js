import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: #90ee90;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #000;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 18rem;
`;

export const EnterButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 3rem;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  background-color: #2e8b57;

  &:hover {
    background-color: #1f6140;
  }

  &:active {
    background-color: #15432d;
  }
`;

export const ReturnButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 3rem;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  background-color: #3cb371;

  &:hover {
    background-color: #32845d;
  }

  &:active {
    background-color: #2a7454;
  }
`;
