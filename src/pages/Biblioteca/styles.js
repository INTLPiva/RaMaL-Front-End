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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #90ee90;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ListCard = styled.div`
  background: #f0fff0;
  width: 70%;
  height: 100%;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;

export const ListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  p {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const Disabled = styled.div`
  cursor: not-allowed;
`;

export const ListItems = styled.div`
  width: 100%;
  height: 3.5rem;
  padding: 0 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;

  color: #000;
  font-size: 1.5rem;

  svg {
    margin-left: 1rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  height: 80%;
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
