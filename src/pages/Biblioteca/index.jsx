import 'regenerator-runtime/runtime';
import React, { useEffect, useRef } from 'react';

import { PlusCircle, Trash, ArrowRight } from 'phosphor-react';
import PropTypes from 'prop-types';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { Container, TranscriptContainer } from './styles';
import { BackButton } from '../../components/BackButton';
import { ChatButton } from '../../components/ChatButton';
import { HelpButton } from '../../components/HelpButton';

export const Biblioteca = ({ pdfUrl = '/pdfs/o_pequeno_principe.pdf' }) => {
  const optionList = [
    'C - para abrir chat',
    '1 - para ler último livro',
    '2 - para abrir biblioteca',
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

  // const handleStopListening = () => {
  //   microphoneRef.current.classList.remove('listening');
  //   SpeechRecognition.stopListening();
  // };

  // const handleReset = () => {
  //   handleStopListening();
  //   resetTranscript();
  //   setOptions('');
  // };

  useEffect(() => {
    if (transcript.includes('livro')) {
      if (transcript.includes('cuidador')) {
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
      }
    }
  }, [transcript]);

  // Funcao para iniciar a escuta quando abrir a página
  useEffect(() => {
    resetTranscript();
    handleListening();
  }, []);

  useEffect(() => {
    // Inicializa o intervalo de 10 segundos
    const intervalo = setInterval(() => {
      resetTranscript();
    }, 10000); // 10000 milissegundos = 10 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <BackButton page={'../menu'} />

      <Container>
        {/* <div className="listHeader">
          <span>Livros</span>
          <a>
            <Plus size={40} />
          </a>
        </div> */}

        <div className="listCard">
          <div className="listHeader">
            <span>Livros</span>
            <a>
              <PlusCircle size={40} />
            </a>
          </div>

          <div className="listItems">
            <span>O Pequeno Príncipe</span>
            <div>
              <a>
                <Trash size={32} />
              </a>
              <a>
                <ArrowRight size={32} />
              </a>
            </div>
          </div>
          <div className="listItems">
            <span>O Curioso Caso de Benjamin Button</span>
            <div>
              <a>
                <Trash size={32} />
              </a>
              <a>
                <ArrowRight size={32} />
              </a>
            </div>
          </div>
        </div>

        <TranscriptContainer>
          <p>{transcript}</p>
        </TranscriptContainer>
      </Container>

      <HelpButton list={optionList} />
      <ChatButton />
    </>
  );
};

Biblioteca.propTypes = {
  pdfUrl: PropTypes.string,
};
