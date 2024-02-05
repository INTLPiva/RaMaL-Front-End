import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: #ffff99;
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

export const RegisterButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 3rem;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  background-color: #ffd700;

  &:hover {
    background-color: #cca800;
  }

  &:active {
    background-color: #b28d00;
  }
`;

export const ReturnButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 3rem;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  background-color: #f5e664;

  &:hover {
    background-color: #e0d23d;
  }

  &:active {
    background-color: #ccc20c;
  }
`;
