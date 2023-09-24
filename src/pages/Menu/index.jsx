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
import { handleClickHelpButton } from '../../components/HelpButton/utils';
import { handleClickCloseModal } from '../../components/Modal/utils';

export const Menu = () => {
  const navigate = useNavigate();

  const optionList = [
    'C - para abrir chat',
    '1 - para ler último livro',
    '2 - para abrir biblioteca',
  ];

  const { transcript, resetTranscript } = useSpeechRecognition();
  // const [isListening, setIsListening] = useState(false);
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
    // setIsListening(true);
    microphoneRef.current?.classList.add('listening');
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  // const handleStopListening = () => {
  // setIsListening(false);
  //   microphoneRef.current.classList.remove('listening');
  //   SpeechRecognition.stopListening();
  // };

  // const handleReset = () => {
  //   handleStopListening();
  //   resetTranscript();
  // setOptions('');
  // };

  useEffect(() => {
    if (transcript.includes('ramal') || transcript.includes('Ramal')) {
      //     setOptions(
      //       'Diga (Anterior) para voltar uma página ou (Próxima) para ir para próxima página'
      //     );
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
        // navigate('../biblioteca');
      } else if (hasLetterA(transcript)) {
        handleClickHelpButton();
        resetTranscript();
      } else if (
        transcript.includes('fechar') ||
        transcript.includes('Fechar')
      ) {
        handleClickCloseModal();
        resetTranscript();
      } else if (transcript.includes('c') || transcript.includes('C')) {
        // handleClickChatButton();
        resetTranscript();
      }
      // else if (transcript === '') {
      // setOptions('');
      // }
    }
  }, [transcript]);

  // Funcao para iniciar a escuta quando abrir a página
  useEffect(() => {
    resetTranscript();
    handleListening();
  }, []);

  // Funcao que reseta o transcript a cada 10 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      resetTranscript();
      // setOptions('');
    }, 10000);

    return () => clearInterval(intervalo);
  }, []);

  const hasLetterA = (string) => {
    const regex = /\ba\b/i;
    return regex.test(string);
  };

  return (
    <>
      <Container>
        {/* <Card>
          <h1 className="title">Upload</h1>

          <div className="buttons">
            <button className="orange-button">
              Escolher Arquivo <Badge text="1" />
            </button>
            <input className="orange-button" type="file" accept=".pdf" />
          </div>
        </Card> */}

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
