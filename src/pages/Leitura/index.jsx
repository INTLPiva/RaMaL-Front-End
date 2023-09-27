import 'regenerator-runtime/runtime';
import React, { useState, useEffect, useRef } from 'react';

import * as pdfjs from 'pdfjs-dist';
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
  handleClickFirstChatOption,
  handleClickSecondChatOption,
} from '../../utils/handleClick';
import {
  hasLetterA,
  hasLetterB,
  hasLetterC,
  hasLetterD,
  hasLetterE,
  hasLetterF,
} from '../../utils/hasLetter';

export const Leitura = ({ pdf }) => {
  const optionList = [
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
    if (
      transcript.includes('um') ||
      transcript.includes('1') ||
      transcript.includes('Um')
    ) {
      decrementCount();
      resetTranscript();
    } else if (
      transcript.includes('dois') ||
      transcript.includes('2') ||
      transcript.includes('Dois')
    ) {
      incrementCount();
      resetTranscript();
    } else if (hasLetterA(transcript)) {
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
    } else if (hasLetterF(transcript)) {
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

  const [text, setText] = useState(['']);
  const [numPages, setNumPages] = useState(1000);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const loadingTask = pdfjs.getDocument(pdf);

    loadingTask.promise
      .then((pdfDocument) => {
        const numPages = pdfDocument.numPages;
        const textPromises = [];

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          textPromises.push(
            pdfDocument.getPage(pageNum).then((page) => {
              return page.getTextContent().then((textContent) => {
                let text = '';
                textContent.items.forEach((item) => {
                  text += item.str + ' ';
                });
                return text;
              });
            })
          );
        }

        return Promise.all(textPromises);
      })
      .then((pageTexts) => {
        setText(pageTexts);
        setNumPages(pageTexts.length);
      })
      .catch((error) => {
        console.error('Erro ao carregar o PDF:', error);
      });
  }, [pdf]);

  const incrementCount = () => {
    setCurrentPage(currentPage + 1);
  };

  const decrementCount = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (text[currentPage]?.trim() === '') incrementCount();
  }, [text]);

  return (
    <>
      <BackButton page={'../menu'} />

      <Container>
        {currentPage < numPages ? (
          <>
            <div className="textContainer">
              <p>{text[currentPage]}</p>
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
            <div className="textHeader">
              <h2>Página atual: {currentPage + 1}</h2>
              <div>
                <button className="orangeButton" onClick={decrementCount}>
                  Anterior <Badge text={'1'} />
                </button>
                <button className="blueButton" onClick={incrementCount}>
                  Próxima <Badge text={'2'} />
                </button>
              </div>
            </div>
            <div className="textContainer">
              <h1>ACABOU</h1>
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
  pdf: PropTypes.string,
};
