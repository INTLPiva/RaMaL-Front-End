import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.6rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 4px;
  background-color: #bdbdbd;
  width: 8.2rem;
  height: 3.5rem;

  &:hover {
    background-color: #a5a5a5;
  }

  &:active {
    background-color: #8c8c8c;
  }
`;

export const PerfilOptions = styled.ul`
  width: 8.2rem;
  background-color: #bdbdbd;

  li {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0.6rem;
    height: 2.5rem;
  }

  li:hover {
    background-color: #a5a5a5;
  }
`;
