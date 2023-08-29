import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Card } from '../../components/Card';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';
import { Input } from '../../components/Input';

export const Cadastro = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Card color={'rgb(250, 235, 220)'}>
          <h1 className="title">Cadastro</h1>

          <div className="inputs">
            <Input name="Nome" type="text" />
            <Input name="Email" type="text" />
            <Input name="Senha" type="password" />
            {/* <Input name="Confirmar Senha" type="password" /> */}
          </div>

          <div className="buttons">
            <button className="cadastrar-button">Cadastrar</button>
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
