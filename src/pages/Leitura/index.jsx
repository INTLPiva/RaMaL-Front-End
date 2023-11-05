import 'regenerator-runtime/runtime';
import React, { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { Container } from './styles';
import { BackButton } from '../../components/BackButton';
import { Badge } from '../../components/Badge';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';
import { TranscriptContainer } from '../../components/TranscriptContainer';
import {
  handleClickHelpButton,
  handleClickCloseModal,
  handleClickBackButton,
  handleClickChatButton,
  // handleClickFirstChatOption,
  handleClickSecondChatOption,
} from '../../utils/handleClick';
import {
  hasLetterA,
  hasLetterB,
  hasLetterC,
  hasLetterF,
  // hasLetterE,
  hasLetterO,
} from '../../utils/hasLetter';
import { hasNumber1, hasNumber2 } from '../../utils/hasNumber';

export const Leitura = ({ pdf }) => {
  const optionList = !pdf.length
    ? ['B - Para voltar para o Menu', 'C - Para abrir o chat']
    : [
        'B - Para voltar para o Menu',
        'C - Para abrir o chat',
        '1 - Para voltar uma página',
        '2 - Para passar uma página',
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
    if (hasNumber1(transcript)) {
      decrementCount();
      resetTranscript();
    } else if (hasNumber2(transcript)) {
      incrementCount();
      resetTranscript();
    } else if (hasLetterA(transcript)) {
      resetTranscript();
      handleClickHelpButton();
    } else if (hasLetterB(transcript)) {
      resetTranscript();
      handleClickBackButton();
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

  if (!pdf.length) {
    return (
      <>
        <BackButton page={'../menu'} />

        <Container>
          <div className="textEnd">
            <h1>Selecione um livro na aba Biblioteca</h1>
          </div>

          <TranscriptContainer transcript={transcript} />
        </Container>

        <HelpButton list={optionList} />
        <ChatButton />
      </>
    );
  }

  return (
    <>
      <BackButton page={'../menu'} />

      <Container>
        {currentPage < numPages ? (
          <>
            <div className="textContainer">
              <p>{pdf[currentPage]}</p>
            </div>

            <div className="textFooter">
              <button className="backPageButton" onClick={decrementCount}>
                Anterior <Badge text={'1'} />
              </button>

              <h2>Página atual: {currentPage + 1}</h2>

              <button className="nextPageButton" onClick={incrementCount}>
                Próxima <Badge text={'2'} />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="textEnd">
              <h1>ACABOU</h1>
            </div>

            <div className="textFooter">
              <button className="backPageButton" onClick={decrementCount}>
                Anterior <Badge text={'1'} />
              </button>

              <h2>Página atual: {currentPage + 1}</h2>

              <button className="nextPageButton" onClick={incrementCount}>
                Próxima <Badge text={'2'} />
              </button>
            </div>
          </>
        )}

        <TranscriptContainer transcript={transcript} />
      </Container>

      <HelpButton list={optionList} />
      <ChatButton />
    </>
  );
};

Leitura.propTypes = {
  pdf: PropTypes.array,
};
