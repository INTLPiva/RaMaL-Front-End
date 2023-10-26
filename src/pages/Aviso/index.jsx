import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Card } from '../../components/Card';

export const Aviso = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setInterval(() => {
  //     navigate('../login');
  //   }, 5000);
  // }, []);

  return (
    <Container>
      <Card color="#FFF">
        <h1 className="title">
          Tutorial para <br /> Cuidadores
        </h1>

        <div className="description">
          <h3>
            Para ser possível a criação do canal de comunicação entre você e o
            paciente, é preciso ter uma conta de usuário no Telegram.
            Solicitamos a autorização para armazenar em nuvem a identificação
            única do chat entre sua conta e o ChatBot do RaMaL.
          </h3>

          <br />

          <h3>
            Caso autorize, em seguida, procure pelo ChatBot chamado RaMaL (nome
            de usuário @projetoRamal_bot) e envie uma Olá para que seja gerado
            uma Identificação única do chat para receber as mensagens
            programadas.
          </h3>
        </div>

        <div className="buttons">
          <button
            className="entendi-button"
            onClick={() => navigate('../login')}
          >
            Entendi
          </button>
        </div>
      </Card>
    </Container>
  );
};
