import 'regenerator-runtime/runtime';
import React, { useEffect, useRef } from 'react';

import { PlusCircle, Trash, ArrowRight } from 'phosphor-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { Container } from './styles';
import { BackButton } from '../../components/BackButton';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';
import { TranscriptContainer } from '../../components/TranscriptContainer';
import {
  handleClickHelpButton,
  handleClickCloseModal,
  handleClickBackButton,
  handleClickChatButton,
  handleClickFirstChatOption,
  handleClickSecondChatOption,
} from '../../utils/handleClick';
import {
  hasLetterA,
  hasLetterB,
  hasLetterC,
  hasLetterD,
  hasLetterE,
  hasLetterO,
} from '../../utils/hasLetter';

export const Biblioteca = ({ setPdf }) => {
  const navigate = useNavigate();

  const optionList = [
    'B - Para voltar para o Menu',
    'C - Para abrir o chat',
    'N.º - Para escolher um livro',
  ];

  const { transcript, resetTranscript } = useSpeechRecognition();
  const microphoneRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="microphone-container">
        Browser is not Support Speech Recognition.
      </div>
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
    } else if (hasLetterB(transcript) || transcript.includes('bebê')) {
      resetTranscript();
      handleClickBackButton();
    } else if (hasLetterC(transcript) || transcript.includes('se')) {
      resetTranscript();
      handleClickChatButton();
    } else if (hasLetterD(transcript) || transcript.includes('de')) {
      resetTranscript();
      handleClickCloseModal();
    } else if (hasLetterE(transcript)) {
      resetTranscript();
      handleClickFirstChatOption();
    } else if (hasLetterO(transcript) || transcript.includes('ó')) {
      resetTranscript();
      handleClickSecondChatOption();
    } else if (
      transcript.includes('um') ||
      transcript.includes('1') ||
      transcript.includes('Um')
    ) {
      resetTranscript();
      setPdf('/pdfs/o_pequeno_principe.pdf');
      navigate('../leitura');
    } else if (
      transcript.includes('dois') ||
      transcript.includes('2') ||
      transcript.includes('Dois')
    ) {
      resetTranscript();
      setPdf('/pdfs/o_curioso_caso_de_benjamin_button.pdf');
      navigate('../leitura');
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
      <BackButton page={'../menu'} />

      <Container>
        <div className="listCard">
          <div className="listHeader">
            <span>Livros</span>
            <a>
              <PlusCircle size={40} />
            </a>
          </div>

          <div className="listItems">
            <span>1 - O Pequeno Príncipe</span>
            <div>
              <a>
                <Trash size={32} />
              </a>
              <a
                onClick={() => {
                  setPdf('/pdfs/o_pequeno_principe.pdf');
                  navigate('../leitura');
                }}
              >
                <ArrowRight size={32} />
              </a>
            </div>
          </div>
          <div className="listItems">
            <span>2 - O Curioso Caso de Benjamin Button</span>
            <div>
              <a>
                <Trash size={32} />
              </a>
              <a
                onClick={() => {
                  setPdf('/pdfs/o_curioso_caso_de_benjamin_button.pdf');
                  navigate('../leitura');
                }}
              >
                <ArrowRight size={32} />
              </a>
            </div>
          </div>
        </div>

        <TranscriptContainer transcript={transcript} />
      </Container>

      <HelpButton list={optionList} />
      <ChatButton />
    </>
  );
};

Biblioteca.propTypes = {
  setPdf: PropTypes.func,
};
