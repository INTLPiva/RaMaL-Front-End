import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .button {
    position: fixed;
    top: 20px;
    left: 20px;
    border: none;
    padding: 0.6rem 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 4px;
    background-color: #bdbdbd;
    width: 8.2rem;
    height: 3.5rem;
  }

  .button:hover {
    background-color: #a5a5a5;
  }

  .button:active {
    background-color: #8c8c8c;
  }
`;
