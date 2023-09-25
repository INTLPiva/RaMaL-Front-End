import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #90ee90;
  display: flex;
  justify-content: center;

  .textHeader {
    display: flex;
    width: 100%;
    /* height: 3.5rem; */
    justify-content: space-around;
    align-items: end;
    margin-bottom: 5.5rem;

    .backPageButton {
      position: relative;
      border: none;
      padding: 0.6rem 2rem;
      font-size: 1.4rem;
      font-weight: 700;
      border-radius: 4px;
      margin-right: 1rem;
      color: #fff;
      background-color: #3cb371;
    }

    .backPageButton:hover {
      background-color: #32845d;
    }

    .backPageButton:active {
      background-color: #2a7454;
    }

    .nextPageButton {
      position: relative;
      border: none;
      padding: 0.6rem 2rem;
      font-size: 1.4rem;
      font-weight: 700;
      border-radius: 4px;
      color: #fff;
      background-color: #2e8b57;
    }

    .nextPageButton:hover {
      background-color: #1f6140;
    }

    .nextPageButton:active {
      background-color: #15432d;
    }
  }

  .textContainer {
    position: fixed;
    top: 5rem;
    width: 70%;
    height: 68%;
    padding: 1rem;
    border-radius: 4px;
    background: #f0fff0;
    display: flex;
    align-items: center;

    overflow-y: auto;

    p {
      color: #000;
      font-size: 1.4rem;
    }
  }
`;

export const TranscriptContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 70%;
  height: 3.5rem;
  padding: 0 0.5rem;
  border-radius: 4px;
  background: #f0fff0;
  display: flex;
  align-items: center;

  p {
    color: #000;
    font-size: 1.5rem;
  }
`;
