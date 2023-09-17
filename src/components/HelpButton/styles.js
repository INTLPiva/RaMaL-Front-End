import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .button {
    position: fixed;
    top: 20px;
    right: 20px;
    border: none;
    padding: 0.6rem 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 4px;
    background-color: rgb(245, 230, 100);
    width: 8.2rem;
  }

  .button:hover {
    background-color: rgb(200, 180, 50);
  }

  .button:active {
    background-color: rgb(150, 130, 30);
  }
`;
