import React from 'react';

// import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Card } from '../../components/Card';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';

export const Menu = () => {
  // const navigate = useNavigate();

  return (
    <>
      <Container>
        <Card color={'rgb(255, 245, 240)'}>
          <h1 className="title">Upload</h1>

          <div className="buttons">
            <button className="orange-button">Escolher Arquivo</button>
          </div>
        </Card>

        <Card color={'rgb(255, 245, 240)'}>
          <h1 className="title">Leitura</h1>

          <div className="buttons">
            <button className="blue-button">Ler</button>
          </div>
        </Card>

        <Card color={'rgb(255, 245, 240)'}>
          <h1 className="title">Biblioteca</h1>

          <div className="buttons">
            <button className="orange-button">Entrar</button>
          </div>
        </Card>
      </Container>

      <HelpButton />
      <ChatButton />
    </>
  );
};
