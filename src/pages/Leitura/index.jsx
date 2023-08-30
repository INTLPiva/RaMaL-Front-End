import 'regenerator-runtime/runtime';
import React, { useState, useEffect, useRef } from 'react';

import * as pdfjs from 'pdfjs-dist';
import PropTypes from 'prop-types';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import './styles.css';
import microPhoneIcon from '../../assets/microphone.png';

export const Leitura = ({ pdfUrl = '/pdfs/o_pequeno_principe.pdf' }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }

  const handleListening = () => {
    setIsListening(true);
    microphoneRef.current.classList.add('listening');
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const handleStopListening = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove('listening');
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    handleStopListening();
    resetTranscript();
    setOptions('');
  };

  const [options, setOptions] = useState('');

  useEffect(() => {
    if (transcript.includes('livro')) {
      setOptions(
        'Diga (Anterior) para voltar uma página ou (Próxima) para ir para próxima página'
      );

      if (transcript.includes('anterior')) {
        // console.log('adicionar lógica para voltar uma página');
        decrementCount();
        resetTranscript();
      } else if (transcript.includes('próxima')) {
        // console.log('adicionar lógica para passar uma página');
        incrementCount();
        resetTranscript();
      }
    } else if (transcript.includes('cuidador')) {
      setOptions(
        'Diga (Chamar) para chamar o seu cuidador ou (Banheiro) se deseja ir ao banheiro ou (Dormir) se deja dormir'
      );

      if (transcript.includes('chamar')) {
        console.log(
          'adicionar lógica para enviar uma mensagem ao cuidador chamando ele'
        );
        resetTranscript();
      } else if (transcript.includes('banheiro')) {
        console.log(
          'adicionar lógica para enviar uma mensagem ao cuidador dizendo que o paciente deseja ir ao banheiro'
        );
        resetTranscript();
      } else if (transcript.includes('dormir')) {
        console.log(
          'adicionar lógica para enviar uma mensagem ao cuidador dizendo que o paciente deseja dormir'
        );
        resetTranscript();
      }
    } else if (transcript === '') {
      setOptions('');
    }
  }, [transcript]);

  const [text, setText] = useState(['']);
  const [numPages, setNumPages] = useState(1000);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const loadingTask = pdfjs.getDocument(pdfUrl);

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
        // `pageTexts` é um array contendo o texto de cada página do PDF
        setText(pageTexts);
        setNumPages(pageTexts.length);
      })
      .catch((error) => {
        console.error('Erro ao carregar o PDF:', error);
      });
  }, [pdfUrl]);

  const incrementCount = () => {
    setCurrentPage(currentPage + 1);
  };

  const decrementCount = () => {
    setCurrentPage(currentPage - 1);
  };

  // Funcao para iniciar a escuta quando abrir a página
  // useEffect(() => {
  //   handleListening();
  // }, []);

  // Verifica se a string é vazia e passa página
  useEffect(() => {
    if (text[currentPage].trim() === '') incrementCount();
  }, [text]);

  return (
    <>
      <div className="microphone-wrapper">
        <div className="mircophone-container">
          <div
            className="microphone-icon-container"
            ref={microphoneRef}
            onClick={handleListening}
          >
            <img src={microPhoneIcon} className="microphone-icon" />
          </div>
          <div className="microphone-status">
            {isListening ? 'Listening.........' : 'Click to start Listening'}
          </div>
          {isListening && (
            <button className="microphone-stop btn" onClick={handleReset}>
              Stop
            </button>
          )}
        </div>

        {options ? (
          <div className="options-container">
            <h2>{options}</h2>
          </div>
        ) : (
          <div className="options-container">
            <h2>Diga livro</h2>
          </div>
        )}

        {transcript && (
          <div className="microphone-result-container">
            <div className="microphone-result-text">{transcript}</div>
            <button className="microphone-reset btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        )}
      </div>

      {currentPage < numPages ? (
        <>
          <div className="text-header">
            <h2>Página atual: {currentPage + 1}</h2>
            <div>
              <button className="microphone-reset btn" onClick={decrementCount}>
                anterior
              </button>
              <button className="microphone-reset btn" onClick={incrementCount}>
                próxima
              </button>
            </div>
          </div>
          <p className="text-container">{text[currentPage]}</p>
        </>
      ) : (
        <h1 className="text-container">ACABOU</h1>
      )}
    </>
  );
};

Leitura.propTypes = {
  pdfUrl: PropTypes.string,
};
