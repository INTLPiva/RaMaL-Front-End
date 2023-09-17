import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgb(242, 239, 235);
  position: relative;

  .title {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 6rem;
    color: #000;
  }

  .entrar-button {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    padding: 0.6rem 2rem;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgb(29, 76, 219);
    min-width: 18rem;
  }

  .entrar-button:hover {
    background-color: rgb(20, 50, 150);
  }

  .entrar-button:active {
    background-color: rgb(10, 25, 75);
  }

  .cadastrar-button {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    padding: 0.6rem 2rem;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgb(219, 127, 29);
    min-width: 18rem;
  }

  .cadastrar-button:hover {
    background-color: rgb(150, 80, 20);
  }

  .cadastrar-button:active {
    background-color: rgb(100, 50, 10);
  }
`;
