import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #90ee90;

  .listHeader {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    /* margin-top: 20px; */

    span {
      font-size: 1.6rem;
      font-weight: 700;
      align-items: center;
      display: flex;
      text-align: center;
    }
  }

  .listCard {
    background: #f0fff0;
    position: fixed;
    top: 5rem;
    width: 70%;
    height: 75%;
    padding: 1rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
  }

  .listItems {
    bottom: 50px;
    width: 100%;
    height: 3.5rem;
    padding: 0 0.5rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;

    span {
      color: #000;
      font-size: 1.5rem;
    }

    svg {
      margin-left: 1rem;
    }
  }
`;
