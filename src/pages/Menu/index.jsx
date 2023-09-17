import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';

export const Menu = () => {
  const navigate = useNavigate();

  const optionList = [
    'C - para abrir chat',
    '1 - para ler último livro',
    '2 - para abrir biblioteca',
  ];

  return (
    <>
      <Container>
        {/* <Card color={'rgb(255, 245, 240)'}>
          <h1 className="title">Upload</h1>

          <div className="buttons">
            <button className="orange-button">
              Escolher Arquivo <Badge text="1" />
            </button>
            <input className="orange-button" type="file" accept=".pdf" />
          </div>
        </Card> */}

        <Card color={'rgb(255, 245, 240)'}>
          <h1 className="title">Leitura</h1>

          <div className="buttons">
            <button
              className="blue-button"
              onClick={() => navigate('../leitura')}
            >
              Ler <Badge text="1" />
            </button>
          </div>
        </Card>

        <Card color={'rgb(255, 245, 240)'}>
          <h1 className="title">Biblioteca</h1>

          <div className="buttons">
            <button className="orange-button">
              Entrar <Badge text="2" />
            </button>
          </div>
        </Card>
      </Container>

      <HelpButton list={optionList} />
      <ChatButton />
    </>
  );
};
