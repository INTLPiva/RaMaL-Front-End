import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #bdbdbd;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  .title {
    font-size: 4rem;
    color: #000;
  }

  .entendi-button {
    border: none;
    padding: 0.6rem 2rem;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: #2e8b57;
    min-width: 18rem;
  }

  .entendi-button:hover {
    background-color: #1f6140;
  }

  .entendi-button:active {
    background-color: #15432d;
  }

  /* .cadastrar-button {
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
  } */
`;
