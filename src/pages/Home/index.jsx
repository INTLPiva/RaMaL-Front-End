import React from 'react';

import { useNavigate } from 'react-router-dom';

import {
  Container,
  Description,
  EnterButton,
  RegisterButton,
  Title,
} from './styles';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src="/src/assets/ramal.png" alt="ramal" />

      <Title>RaMaL</Title>

      <EnterButton onClick={() => navigate('login')}>Entrar</EnterButton>

      <RegisterButton onClick={() => navigate('cadastro')}>
        Cadastrar
      </RegisterButton>

      <Description>
        O sistema com reconhecimento de voz que irá lhe auxiliar na leitura de
        livros e na comunicação com o cuidador através do Telegram.
      </Description>
    </Container>
  );
};
