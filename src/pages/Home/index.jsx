import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <h1 className="title">RaMaL</h1>

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

      <HelpButton />
      <ChatButton />
    </>
  );
};
