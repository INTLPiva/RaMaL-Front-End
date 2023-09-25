import React, { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { Container, TranscriptContainer } from './styles';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { ChatButton } from '../../components/ChatButton';
import { handleClickChatButton } from '../../components/ChatButton/utils';
import { HelpButton } from '../../components/HelpButton';
import { handleClickHelpButton } from '../../components/HelpButton/utils';
import { handleClickCloseModal } from '../../components/Modal/utils';
import { hasLetterA, hasLetterC } from '../../utils/hasLetter';

export const Menu = () => {
  const navigate = useNavigate();

  const optionList = [
    'C - para abrir chat',
    '1 - para ler último livro',
    '2 - para abrir biblioteca',
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
    } else if (transcript.includes('fechar') || transcript.includes('Fechar')) {
      handleClickCloseModal();
      resetTranscript();
    } else if (hasLetterC(transcript)) {
      handleClickChatButton();
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
