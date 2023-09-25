import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <h1 className="title">RaMaL</h1>

        <img className="ramal" src="/src/assets/ramal.png" alt="ramal" />

        <button className="entrar-button" onClick={() => navigate('login')}>
          Entrar
        </button>
        <button
          className="cadastrar-button"
          onClick={() => navigate('cadastro')}
        >
          Cadastrar
        </button>
      </Container>
    </>
  );
};
