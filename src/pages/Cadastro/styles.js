import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgb(230, 154, 78);
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 5rem;
    color: #000;
  }

  .cadastrar-button {
    position: relative;
    border: none;
    padding: 0.6rem 2rem;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgb(29, 76, 219);
    min-width: 18rem;
  }

  .cadastrar-button:hover {
    background-color: rgb(20, 50, 150);
  }

  .cadastrar-button:active {
    background-color: rgb(10, 25, 75);
  }

  .voltar-button {
    position: relative;
    border: none;
    padding: 0.6rem 2rem;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgb(219, 127, 29);
    min-width: 18rem;
  }

  .voltar-button:hover {
    background-color: rgb(150, 80, 20);
  }

  .voltar-button:active {
    background-color: rgb(100, 50, 10);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;
