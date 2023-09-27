import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  width: 70%;
  height: 3.5rem;
  padding: 0 0.5rem;
  border-radius: 4px;
  background: #f0fff0;
  display: flex;
  align-items: center;

  .ramal {
    position: fixed;
    height: 3.5rem;
    bottom: 20px;
    left: 8%;
  }

  .transcript {
    color: #000;
    font-size: 1.5rem;
  }
`;
