import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;

  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(2px);
  transform: scale(0);
  transition: background 240ms ease-in-out;
  transition-delay: 220ms;

  div {
    width: 10rem;
    height: 10rem;

    display: block;
    position: relative;

    border-radius: 50%;
    border: 0.25rem solid transparent;
    border-top-color: green;

    animation: loader 1s linear infinite;
    transform: scale(0);
    transition: all 220ms ease-in-out;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ visible }) =>
    visible &&
    css`
      &,
      div {
        transform: scale(1);
      }
      div {
        transition-delay: 220ms;
      }
      transition-delay: 0ms;
      background-color: rgba(0, 0, 0, 0.2);
    `}
`;
