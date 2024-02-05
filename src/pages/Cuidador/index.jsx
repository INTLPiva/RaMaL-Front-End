/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';

import {
  Container,
  DeleteButton,
  Header,
  RegisterButton,
  Title,
  TokenButton,
  WarningCard,
} from './styles';
import { BackButton } from '../../components/BackButton';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';

export const Cuidador = () => {
  const { userId, setLoading, setTokenCaregiver } = useAuth();

  const [idCuidador, setIdCuidador] = useState();
  const [nomeCuidador, setNomeCuidador] = useState();

  const [caregiver, setCaregiver] = useState({});

  async function getToken() {
    const TokenChatRaMaL = '6256673882:AAE5MbTips7faQXxilM71Ku3evbdqA_sAcM';

    await axios
      .get(`https://api.telegram.org/bot${TokenChatRaMaL}/getUpdates`)
      .then((response) => {
        const id = response.data.result[0].message.chat.id;
        const name = response.data.result[0].message.chat.first_name;
        if (id && name) {
          setIdCuidador(id);
          setNomeCuidador(name);
          toast.success('Token gerado com sucesso');
        }
      })
      .catch((error) => {
        console.error('Erro ao fazer requisição:', error);
        toast.error('Erro ao gerar token');
      });
  }

  async function saveCaregiverToken({ name, token, userId }) {
    setLoading(true);

    if (!name) {
      toast.warn('Nome não encontrado');
      setLoading(false);
      return;
    }

    if (!token) {
      toast.warn('Token não encontrado');
      setLoading(false);
      return;
    }

    try {
      const response = await api.post('/caregivers', {
        name,
        token,
        userId,
      });

      if (response.status !== 200) {
        toast.error('Erro ao cadastrar Cuidador');
        setLoading(false);
        return;
      }

      setTokenCaregiver(token);
      localStorage.setItem('tokenCaregiver', token);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      toast.error('Erro ao cadastrar Cuidador');
      setLoading(false);
    }
  }

  async function handleDeleteCaregiver(id) {
    setLoading(true);

    try {
      const response = await api.delete(`/caregivers/${id}`);

      if (response.status !== 200) {
        toast.error('Erro ao deletar Cuidador');
        setLoading(false);
        return;
      }

      localStorage.removeItem('tokenCaregiver');
      setTokenCaregiver('');

      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error('Erro ao deletar Cuidador');
      setLoading(false);
    }
  }

  async function getCaregiver() {
    try {
      setLoading(true);
      const response = await api.get(`/caregivers/${userId}`);

      setCaregiver(response.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCaregiver();
  }, []);

  if (!caregiver) {
    return (
      <Container>
        <Header>
          <BackButton page={'../menu'} />
        </Header>
        <WarningCard>
          <Title>Tutorial para cadastro de cuidador</Title>

          <div>
            <h3>
              Para ser possível a criação do canal de comunicação entre o
              paciente e o cuidador, é preciso que o cuidador tenha uma conta de
              usuário no Telegram. Solicitamos a autorização para armazenar em
              nuvem a identificação única do chat entre a conta e o ChatBot do
              RaMaL.
            </h3>

            <br />

            <h3>
              Caso autorizado, em seguida, no Telegram pesquise por
              @projetoRamal_bot e envie um 'Olá' para que seja gerado o token
              único do Telegram para receber as mensagens programadas.
            </h3>

            <br />

            <h3>
              Após o envio da mensagem clique no botão abaixo e aguarde a
              requisição ser feita.
            </h3>
          </div>

          <TokenButton onClick={() => getToken()}>Pegar token</TokenButton>

          <h3>
            Após gerado o token clique no botão abaixo para cadastrar o
            cuidador.
          </h3>

          <RegisterButton
            onClick={() =>
              saveCaregiverToken({
                name: nomeCuidador.toString(),
                token: idCuidador.toString(),
                userId: userId.toString(),
              })
            }
            disabled={!idCuidador && !nomeCuidador}
          >
            Cadastrar
          </RegisterButton>
        </WarningCard>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton page={'../menu'} />
      </Header>
      <WarningCard>
        <Title>Já existe um cuidador cadastrado</Title>

        <div>
          <h2>
            Só é possível cadastrar 1 cuidador, para cadastrar outra pessoa é
            necessário excluir o atual.
          </h2>
        </div>

        <div>
          <h2>Clique no botão abaixo para excluir</h2>
          <br />
          <h3>
            * Após excluído o cuidador está ação não poderá ser desfeita *
          </h3>
          <br />
        </div>

        <DeleteButton onClick={() => handleDeleteCaregiver(caregiver.id)}>
          Excluir cuidador
        </DeleteButton>
      </WarningCard>
    </Container>
  );
};
