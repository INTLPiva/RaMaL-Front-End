import styled from 'styled-components';

export const MicrophoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 5rem;
  color: #000;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  height: 100vh;
  background-color: #90ee90;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #000;
`;

export const Description = styled.div`
  text-align: center;
`;

export const MenuButton = styled.button`
  padding: 0.6rem 2rem;
  height: 50%;
  width: 90%;
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

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;

  img {
    width: 8.2rem;
  }

  span {
    width: 8.2rem;
  }
`;
