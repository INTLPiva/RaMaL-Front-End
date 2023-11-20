import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #e0e0e0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  .title {
    font-size: 4rem;
    color: #000;
  }

  .token-button {
    border: none;
    padding: 0.6rem 2rem;
    font-size: 2rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: #2e8b57;
    min-width: 18rem;
  }

  .token-button:hover {
    background-color: #1f6140;
  }

  .token-button:active {
    background-color: #15432d;
  }

  .cadastrar-button {
    border: none;
    padding: 0.6rem 2rem;
    font-size: 2rem;
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

  .cadastrar-button:disabled {
    background-color: #b28d00;
    cursor: not-allowed;
  }

  .delete-button {
    border: none;
    padding: 0.6rem 2rem;
    font-size: 2rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: #ff3333;
    min-width: 18rem;
  }

  .delete-button:hover {
    background-color: #cc0000;
  }

  .delete-button:active {
    background-color: #990000;
  }
`;

export const WarningCard = styled.div`
  height: 76%;
  width: 80%;
  background-color: #fff;
  border-radius: 18px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
