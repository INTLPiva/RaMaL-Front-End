import styled from 'styled-components';

export const Container = styled.div`
  .button {
    position: fixed;
    top: 20px;
    right: 20px;
    border: none;
    padding: 10px 30px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 4px;
    background-color: rgba(245, 230, 100);
    min-width: 130px;
  }

  .button:hover {
    background-color: rgba(200, 180, 50, 1);
  }

  .button:active {
    background-color: rgba(150, 130, 30, 1);
  }
`;
