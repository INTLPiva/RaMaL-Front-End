import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #90ee90;
  display: flex;
  justify-content: center;

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
      height: 100%;
      width: 100%;
    }
  }

  .textEnd {
    position: fixed;
    top: 5rem;
    width: 70%;
    height: 68%;
    padding: 1rem;
    border-radius: 4px;
    background: #f0fff0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .textFooter {
    display: flex;
    text-align: center;
    align-items: end;
    margin-bottom: 6%;
    // 5.5rem pro notebook
    // 9.5rem pro monitor
    // 6% para os 2;
    gap: 2rem;

    .backPageButton {
      position: relative;
      border: none;
      padding: 0.6rem 2rem;
      font-size: 1.4rem;
      font-weight: 700;
      border-radius: 4px;
      color: #fff;
      background-color: #3cb371;
    }

    .backPageButton:hover {
      background-color: #32845d;
    }

    .backPageButton:active {
      background-color: #2a7454;
    }

    h2 {
      margin-bottom: 0.6rem;
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
`;

export const IconsContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 3rem;
  bottom: 13rem;
  right: 10rem;

  gap: 1rem;
`;

export const IconButton = styled.button`
  position: relative;

  display: flex;
  padding: 0.75rem;

  gap: 0.625rem;

  background: #f0fff0;
  border: 4px solid #a0aec03d;
  border-radius: 50%;

  svg {
    color: #a0aec0;
  }
`;
