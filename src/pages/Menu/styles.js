import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #90ee90;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .microphone-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5rem;
    color: #000;
    width: 100%;
    height: 20vh;
  }

  .title {
    font-size: 5rem;
    color: #000;
  }

  .menu-button {
    position: relative;
    border: none;
    padding: 0.6rem 2rem;
    height: 100%;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: #2e8b57;
  }

  .menu-button:hover {
    background-color: #1f6140;
  }

  .menu-button:active {
    background-color: #15432d;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 50%;
    gap: 1rem;

    span {
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
      top: -16px;
      left: -16px;
      width: 3rem;
    }
  }
`;
