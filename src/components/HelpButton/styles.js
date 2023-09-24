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
    background-color: #f5e664;
    width: 8.2rem;
    height: 3.5rem;
  }

  .button:hover {
    background-color: #c8b432;
  }

  .button:active {
    background-color: #96821e;
  }
`;
