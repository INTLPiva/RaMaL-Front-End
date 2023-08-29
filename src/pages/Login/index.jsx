import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Card } from '../../components/Card';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';
import { Input } from '../../components/Input';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Card color={'rgba(224, 237, 246)'}>
          <h1 className="title">Login</h1>

          <div className="inputs">
            <Input name="Email" type="text" />
            <Input name="Senha" type="password" />
          </div>

          <div className="buttons">
            <button
              className="entrar-button"
              onClick={() => navigate('../menu')}
            >
              Entrar
            </button>
            <button className="voltar-button" onClick={() => navigate('/')}>
              Voltar
            </button>
          </div>
        </Card>
      </Container>

      <HelpButton />
      <ChatButton />
    </>
  );
};
