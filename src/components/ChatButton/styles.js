import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border: none;
    padding: 0.6rem 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 4px;
    background-color: rgb(124, 245, 100);
    width: 8.2rem;
  }

  .button:hover {
    background-color: rgb(80, 160, 50);
  }

  .button:active {
    background-color: rgb(60, 120, 40);
  }
`;
