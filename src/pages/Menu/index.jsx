import React, { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { Container, TranscriptContainer } from './styles';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';
import {
  handleClickHelpButton,
  handleClickCloseModal,
  handleClickChatButton,
  handleClickFirstChatOption,
  handleClickSecondChatOption,
} from '../../utils/handleClick';
import {
  hasLetterA,
  hasLetterC,
  hasLetterD,
  hasLetterE,
  hasLetterF,
} from '../../utils/hasLetter';

export const Menu = () => {
  const navigate = useNavigate();

  const optionList = [
    'C - Para abrir chat',
    '1 - Para ler último livro',
    '2 - Para abrir biblioteca',
  ];

  const { transcript, resetTranscript } = useSpeechRecognition();
  const microphoneRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <Container>
        <div className="microphone-container">
          Browser utilizado não suporta reconhecimento de voz.
        </div>
      </Container>
    );
  }

  const handleListening = () => {
    microphoneRef.current?.classList.add('listening');
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  useEffect(() => {
    if (
      transcript.includes('um') ||
      transcript.includes('1') ||
      transcript.includes('Um')
    ) {
      resetTranscript();
      navigate('../leitura');
    } else if (
      transcript.includes('dois') ||
      transcript.includes('2') ||
      transcript.includes('Dois')
    ) {
      resetTranscript();
      navigate('../biblioteca');
    } else if (hasLetterA(transcript)) {
      handleClickHelpButton();
      resetTranscript();
    } else if (hasLetterC(transcript) || transcript.includes('se')) {
      handleClickChatButton();
      resetTranscript();
    } else if (hasLetterD(transcript) || transcript.includes('de')) {
      handleClickCloseModal();
      resetTranscript();
    } else if (hasLetterE(transcript)) {
      handleClickFirstChatOption();
      resetTranscript();
    } else if (hasLetterF(transcript)) {
      handleClickSecondChatOption();
      resetTranscript();
    }
  }, [transcript]);

  useEffect(() => {
    resetTranscript();
    handleListening();
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      resetTranscript();
    }, 10000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Container>
        <Card>
          <h1 className="title">Leitura</h1>

          <div className="buttons">
            <button
              className="menu-button"
              onClick={() => navigate('../leitura')}
            >
              Ler <Badge text="1" />
            </button>
          </div>
        </Card>

        <Card>
          <h1 className="title">Biblioteca</h1>

          <div className="buttons">
            <button
              className="menu-button"
              onClick={() => navigate('../biblioteca')}
            >
              Entrar <Badge text="2" />
            </button>
          </div>
        </Card>

        <TranscriptContainer>
          <p>{transcript}</p>
        </TranscriptContainer>
      </Container>

      <HelpButton list={optionList} />
      <ChatButton />
    </>
  );
};
