import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, #root {
    width: 100vw;
    height: 100vh;
  }

  body, input, button {
    font: 1rem Roboto, sans-serif;
    border: none;
  }

  button, a {
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;
