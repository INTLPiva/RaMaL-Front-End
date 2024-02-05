import 'regenerator-runtime/runtime';
import React, { useState, useEffect, useRef } from 'react';

import { ArrowDown, ArrowUp } from 'phosphor-react';
import PropTypes from 'prop-types';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import {
  BackPageButton,
  Container,
  Footer,
  Header,
  IconButton,
  IconsContainer,
  MicrophoneContainer,
  NextPageButton,
  TextContainer,
  TextFooter,
  Wrapper,
} from './styles';
import { BackButton } from '../../components/BackButton';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';
import { TranscriptContainer } from '../../components/TranscriptContainer';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import {
  handleClickHelpButton,
  handleClickCloseModal,
  handleClickBackButton,
  handleClickChatButton,
  handleClickFirstChatOption,
} from '../../utils/handleClick';

export const Leitura = ({ pdf }) => {
  const { userId, setLoading } = useAuth();

  const [caregiver, setCaregiver] = useState({});

  const optionList = !pdf.length
    ? ['Voltar - Para voltar para o Menu', 'Chat - Para abrir o chat']
    : [
        'Voltar - Para voltar para o Menu',
        'Chat - Para abrir o chat',
        'Anterior - Para voltar uma página',
        'Próxima - Para passar uma página',
        'Subir - Para subir o scroll',
        'Descer - Para descer o scroll',
      ];

  const { transcript, resetTranscript } = useSpeechRecognition();
  const microphoneRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <MicrophoneContainer>
        Browser is not Support Speech Recognition.
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
    if (transcript.toLowerCase().includes('anterior')) {
      decrementCount();
      resetTranscript();
    } else if (transcript.toLowerCase().includes('próxima' || 'próximo')) {
      incrementCount();
      resetTranscript();
    } else if (transcript.toLowerCase().includes('ajuda')) {
      resetTranscript();
      handleClickHelpButton();
    } else if (transcript.toLowerCase().includes('voltar')) {
      resetTranscript();
      handleClickBackButton();
    } else if (transcript.toLowerCase().includes('chat')) {
      resetTranscript();
      handleClickChatButton();
    } else if (transcript.toLowerCase().includes('fechar')) {
      resetTranscript();
      handleClickCloseModal();
    } else if (transcript.toLowerCase().includes('chamar')) {
      resetTranscript();
      handleClickFirstChatOption();
    } else if (transcript.toLowerCase().includes('subir')) {
      sendScrollToTop();
    } else if (transcript.toLowerCase().includes('descer')) {
      sendScrollToBottom();
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

  const [numPages, setNumPages] = useState(1000);
  const [currentPage, setCurrentPage] = useState(0);

  const incrementCount = () => {
    setCurrentPage(currentPage + 1);
  };

  const decrementCount = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setNumPages(pdf?.length);
    if (pdf[currentPage]?.trim() === '') incrementCount();
  }, [pdf]);

  function sendScrollToBottom() {
    const textContainer = document.getElementById('textContainer');

    if (textContainer && textContainer.scrollTo) {
      textContainer.scrollTo({
        top: textContainer.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  function sendScrollToTop() {
    const textContainer = document.getElementById('textContainer');

    if (textContainer && textContainer.scrollTo) {
      textContainer.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  useEffect(() => {
    const textContainer = document.getElementById('textContainer');

    if (textContainer && textContainer.scrollTo) {
      textContainer.scrollTo({
        top: 0,
      });
    }
  }, [currentPage]);

  if (!pdf.length) {
    return (
      <Container>
        <Header>
          <BackButton page={'../menu'} />
          <HelpButton list={optionList} />
        </Header>

        <Wrapper>
          <TextContainer>
            <h1>Selecione um livro na aba Biblioteca</h1>
          </TextContainer>
        </Wrapper>

        <Footer>
          <img src="/src/assets/ramal.png" alt="ramal" />

          <TranscriptContainer transcript={transcript} />

          {caregiver ? <ChatButton /> : <span />}
        </Footer>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Header>
          <BackButton page={'../menu'} />
          <HelpButton list={optionList} />
        </Header>

        {currentPage < numPages ? (
          <>
            <Wrapper>
              <TextContainer id="textContainer">
                <p>{pdf[currentPage]}</p>
              </TextContainer>

              <IconsContainer>
                <IconButton onClick={() => sendScrollToTop()}>
                  <ArrowUp weight="bold" />
                </IconButton>

                <IconButton onClick={() => sendScrollToBottom()}>
                  <ArrowDown weight="bold" />
                </IconButton>
              </IconsContainer>
            </Wrapper>

            <TextFooter>
              <BackPageButton onClick={decrementCount}>Anterior</BackPageButton>

              <h2>Página atual: {currentPage + 1}</h2>

              <NextPageButton onClick={incrementCount}>Próxima</NextPageButton>
            </TextFooter>
          </>
        ) : (
          <>
            <Wrapper>
              <TextContainer>
                <h1>ACABOU</h1>
              </TextContainer>
            </Wrapper>

            <TextFooter>
              <BackPageButton onClick={decrementCount}>Anterior</BackPageButton>

              <h2>Página atual: {currentPage + 1}</h2>

              <NextPageButton onClick={incrementCount}>Próxima</NextPageButton>
            </TextFooter>
          </>
        )}

        <Footer>
          <img src="/src/assets/ramal.png" alt="ramal" />

          <TranscriptContainer transcript={transcript} />

          {caregiver ? <ChatButton /> : <span />}
        </Footer>
      </Container>
    </>
  );
};

Leitura.propTypes = {
  pdf: PropTypes.array,
};
