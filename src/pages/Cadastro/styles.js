import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgb(230, 154, 78);
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 80px;
    color: #000;
  }

  .cadastrar-button {
    border: none;
    padding: 10px 30px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgba(29, 76, 219);
    min-width: 250px;
  }

  .cadastrar-button:hover {
    background-color: rgba(20, 50, 150, 1);
  }

  .cadastrar-button:active {
    background-color: rgba(10, 25, 75, 1);
  }

  .voltar-button {
    border: none;
    padding: 10px 30px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgba(219, 127, 29);
    min-width: 250px;
  }

  .voltar-button:hover {
    background-color: rgba(150, 80, 20, 1);
  }

  .voltar-button:active {
    background-color: rgba(100, 50, 10, 1);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;
