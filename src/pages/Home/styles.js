import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #f0fff0;
  position: relative;

  .title {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 6rem;
    color: #000;
  }

  .ramal {
    position: absolute;
    width: 40rem;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
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
    background-color: #2e8b57;
    min-width: 18rem;
  }

  .entrar-button:hover {
    background-color: #1f6140;
  }

  .entrar-button:active {
    background-color: #15432d;
  }

  .cadastrar-button {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    padding: 0.6rem 2rem;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: #ffd700;
    min-width: 18rem;
  }

  .cadastrar-button:hover {
    background-color: #cca800;
  }

  .cadastrar-button:active {
    background-color: #b28d00;
  }
`;
