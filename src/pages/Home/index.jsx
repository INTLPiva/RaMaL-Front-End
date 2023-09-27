import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <img className="ramal" src="/src/assets/ramal.png" alt="ramal" />

        <h1 className="title">RaMaL</h1>

        <p className="description">
          O sistema com reconhecimento de voz que irá lhe auxiliar na leitura de
          livros e na comunicação com o cuidador através do Telegram.
        </p>

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
