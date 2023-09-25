import styled from 'styled-components';

export const Container = styled.div`
  .darkBG {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
  }

  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    width: 30rem;

    background: white;
    color: white;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  }

  .modalHeader {
    background: white;
    overflow: hidden;
    border-radius: 16px;
  }

  .heading {
    padding: 10px;
    color: #000;
    font-weight: 700;
    font-size: 5rem;
    text-align: center;
  }

  .modalContent {
    padding: 0.6rem;
    font-size: 2rem;
    color: #000;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    min-height: 25rem;

    li {
      margin-bottom: 1rem;
    }
  }

  .closeBtn {
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    color: #2c3e50;
    background: white;
    transition: all 0.25s ease;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    right: 0;
    top: 0;
    align-self: flex-end;
    margin-top: -7px;
    margin-right: -7px;
  }

  .closeBtn:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: scale(1.1);
  }

  .buttonSubmit {
    background: lightgreen;
    width: 70%;
    border: 0;
    font-weight: bold;
    height: 2rem;
    border-radius: 5px;
    transition: 0.5s;
  }

  .buttonSubmit:hover {
    filter: brightness(80%) saturate(120%);
  }
`;
