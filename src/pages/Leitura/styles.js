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
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  gap: 1rem;
  overflow-y: auto;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 4px;
  background: #f0fff0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  p {
    color: #000;
    font-size: 1.4rem;
    height: 100%;
    width: 100%;
  }
`;

export const TextFooter = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 2rem;
  height: 3rem;
`;

export const BackPageButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 1.4rem;
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

export const NextPageButton = styled.button`
  padding: 0.6rem 2rem;
  font-size: 1.4rem;
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

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3rem;
`;

export const IconButton = styled.button`
  display: flex;
  padding: 0.75rem;
  background: #f0fff0;
  border: 4px solid #a0aec03d;
  border-radius: 50%;

  svg {
    color: #a0aec0;
  }
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
