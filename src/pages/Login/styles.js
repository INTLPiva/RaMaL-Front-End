import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #90ee90;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 5rem;
    color: #000;
  }

  .entrar-button {
    position: relative;
    border: none;
    padding: 0.6rem 2rem;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: #2e8b57;
    min-width: 18rem;
  }

  .entrar-button:hover {
    background-color: #1f6140;
  }

  .entrar-button:active {
    background-color: #15432d;
  }

  .voltar-button {
    position: relative;
    border: none;
    padding: 0.6rem 2rem;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: #3cb371;
    min-width: 18rem;
  }

  .voltar-button:hover {
    background-color: #32845d;
  }

  .voltar-button:active {
    background-color: #2a7454;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;
