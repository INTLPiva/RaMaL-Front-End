import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #f0fff0;
  position: relative;

  img {
    position: absolute;
    width: 40rem;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  color: #000;
`;

export const EnterButton = styled.button`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.6rem 2rem;
  font-size: 3rem;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  background-color: #2e8b57;
  min-width: 18rem;

  &:hover {
    background-color: #1f6140;
  }

  &:active {
    background-color: #15432d;
  }
`;

export const RegisterButton = styled.button`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.6rem 2rem;
  font-size: 3rem;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  background-color: #ffd700;
  min-width: 18rem;

  &:hover {
    background-color: #cca800;
  }

  &:active {
    background-color: #b28d00;
  }
`;

export const Description = styled.p`
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;
