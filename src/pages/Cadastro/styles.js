import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #ffff99;
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
    background-color: #ffd700;
    min-width: 18rem;
  }

  .cadastrar-button:hover {
    background-color: #cca800;
  }

  .cadastrar-button:active {
    background-color: #b28d00;
  }

  .voltar-button {
    position: relative;
    border: none;
    padding: 0.6rem 2rem;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: #f5e664;
    min-width: 18rem;
  }

  .voltar-button:hover {
    background-color: #e0d23d;
  }

  .voltar-button:active {
    background-color: #ccc20c;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;
