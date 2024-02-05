import React, { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import {
  Cards,
  Container,
  Description,
  Footer,
  Header,
  MenuButton,
  MicrophoneContainer,
  Title,
} from './styles';
import { Card } from '../../components/Card';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';
import { PerfilButton } from '../../components/PerfilButton';
import { TranscriptContainer } from '../../components/TranscriptContainer';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import {
  handleClickHelpButton,
  handleClickCloseModal,
  handleClickChatButton,
  handleClickFirstChatOption,
} from '../../utils/handleClick';

export const Menu = () => {
  const navigate = useNavigate();
  const { userId, setLoading } = useAuth();

  const [caregiver, setCaregiver] = useState({});

  const optionList = [
    'Chat - Para abrir chat',
    'Ler - Para ler último livro',
    'Entrar - Para abrir biblioteca',
  ];

  const { transcript, resetTranscript } = useSpeechRecognition();
  const microphoneRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <MicrophoneContainer>
        Browser utilizado não suporta reconhecimento de voz.
      </MicrophoneContainer>
    );
  }

  const handleListening = () => {
    microphoneRef.current?.classList.add('listening');
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  useEffect(() => {
    if (transcript.toLowerCase().includes('ajuda')) {
      resetTranscript();
      handleClickHelpButton();
    } else if (transcript.toLowerCase().includes('chat')) {
      resetTranscript();
      handleClickChatButton();
    } else if (transcript.toLowerCase().includes('fechar')) {
      resetTranscript();
      handleClickCloseModal();
    } else if (transcript.toLowerCase().includes('chamar')) {
      resetTranscript();
      handleClickFirstChatOption();
    } else if (transcript.toLowerCase().includes('ler')) {
      resetTranscript();
      navigate('../leitura');
    } else if (transcript.toLowerCase().includes('entrar')) {
      resetTranscript();
      navigate('../biblioteca');
    }
  }, [transcript]);

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
    resetTranscript();
    handleListening();
    getCaregiver();
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      resetTranscript();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <Container>
      <Header>
        <PerfilButton />
        <HelpButton list={optionList} />
      </Header>

      <Cards>
        <Card>
          <Title>Leitura</Title>

          <Description>
            <h3>
              Escolha uma local para apoiar seu dispositivo e Boa Leitura!
            </h3>
            <br />
            <p>Observação: será carregado o último documento selecionado.</p>
          </Description>

          <MenuButton onClick={() => navigate('../leitura')}>Ler</MenuButton>
        </Card>

        <Card>
          <Title>Biblioteca</Title>

          <Description>
            <h3>
              Verifique todos os títulos incluídos na Biblioteca Virtual e/ou
              adicione novos.
              <br />
              <br />
              Selecione o documento que deseja ler.
            </h3>
          </Description>

          <MenuButton onClick={() => navigate('../biblioteca')}>
            Entrar
          </MenuButton>
        </Card>
      </Cards>

      <Footer>
        <img src="/src/assets/ramal.png" alt="ramal" />

        <TranscriptContainer transcript={transcript} />

        {caregiver ? <ChatButton /> : <span />}
      </Footer>
    </Container>
  );
};
