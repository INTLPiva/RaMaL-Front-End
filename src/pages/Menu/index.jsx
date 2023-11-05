import React, { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { Container } from './styles';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';
import { PerfilButton } from '../../components/PerfilButton';
import { TranscriptContainer } from '../../components/TranscriptContainer';
import {
  handleClickHelpButton,
  handleClickCloseModal,
  handleClickChatButton,
  // handleClickFirstChatOption,
  handleClickSecondChatOption,
} from '../../utils/handleClick';
import {
  hasLetterA,
  hasLetterC,
  hasLetterF,
  // hasLetterE,
  hasLetterG,
  hasLetterH,
  hasLetterO,
} from '../../utils/hasLetter';

export const Menu = () => {
  const navigate = useNavigate();

  const optionList = [
    'C - Para abrir chat',
    'G - Para ler último livro',
    'H - Para abrir biblioteca',
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
    if (hasLetterA(transcript)) {
      resetTranscript();
      handleClickHelpButton();
    } else if (hasLetterC(transcript)) {
      resetTranscript();
      handleClickChatButton();
    } else if (hasLetterF(transcript)) {
      resetTranscript();
      handleClickCloseModal();
    }
    // else if (hasLetterE(transcript)) {
    //   resetTranscript();
    //   handleClickFirstChatOption();
    // }
    else if (hasLetterO(transcript)) {
      resetTranscript();
      handleClickSecondChatOption();
    } else if (hasLetterG(transcript)) {
      resetTranscript();
      navigate('../leitura');
    } else if (hasLetterH(transcript)) {
      resetTranscript();
      navigate('../biblioteca');
    }
  }, [transcript]);

  useEffect(() => {
    resetTranscript();
    handleListening();
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      resetTranscript();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <PerfilButton />

      <Container>
        <Card>
          <h1 className="title">Leitura</h1>

          <div className="description">
            <h3>
              Escolha uma local para apoiar seu dispositivo e Boa Leitura!
            </h3>
            <br />
            <p>Observação: será carregado o último documento selecionado.</p>
          </div>

          <div className="buttons">
            <button
              className="menu-button"
              onClick={() => navigate('../leitura')}
            >
              Ler <Badge text="G" />
            </button>
          </div>
        </Card>

        <Card>
          <h1 className="title">Biblioteca</h1>

          <div className="description">
            <h3>
              Verifique todos os títulos incluídos na Biblioteca Virtual e/ou
              adicione novos.
              <br />
              Selecione o documento que deseja ler.
            </h3>
          </div>

          <div className="buttons">
            <button
              className="menu-button"
              onClick={() => navigate('../biblioteca')}
            >
              Entrar <Badge text="H" />
            </button>
          </div>
        </Card>

        <TranscriptContainer transcript={transcript} />
      </Container>

      <HelpButton list={optionList} />
      <ChatButton />
    </>
  );
};
