import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgba(242, 239, 235);

  .title {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    color: #000;
  }

  .entrar-button {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    padding: 10px 30px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgba(29, 76, 219);
    min-width: 250px;
  }

  .entrar-button:hover {
    background-color: rgba(20, 50, 150, 1);
  }

  .entrar-button:active {
    background-color: rgba(10, 25, 75, 1);
  }

  .cadastrar-button {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    padding: 10px 30px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgba(219, 127, 29);
    min-width: 250px;
  }

  .cadastrar-button:hover {
    background-color: rgba(150, 80, 20, 1);
  }

  .cadastrar-button:active {
    background-color: rgba(100, 50, 10, 1);
  }
`;
