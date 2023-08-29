import React from 'react';

import { Container } from './styles';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';

export const Home = () => {
  return (
    <Container>
      <h1 className="title">RaMaL</h1>

      <button className="entrar-button">Entrar</button>
      <button className="cadastrar-button">Cadastrar</button>

      <HelpButton />
      <ChatButton />
    </Container>
  );
};
