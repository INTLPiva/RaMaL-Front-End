import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgb(255, 204, 179);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .title {
    font-size: 80px;
    color: #000;
  }

  .orange-button {
    border: none;
    padding: 10px 30px;
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgb(219, 127, 29);
  }

  .orange-button:hover {
    background-color: rgba(150, 80, 20, 1);
  }

  .orange-button:active {
    background-color: rgba(100, 50, 10, 1);
  }

  .blue-button {
    border: none;
    padding: 10px 30px;
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgb(51, 173, 255);
    min-width: 250px;
  }

  .blue-button:hover {
    background-color: rgb(25, 87, 128);
  }

  .blue-button:active {
    background-color: rgb(12, 43, 64);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 50%;
    gap: 18px;
  }
`;
