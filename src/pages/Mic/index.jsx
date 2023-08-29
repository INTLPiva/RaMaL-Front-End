import 'regenerator-runtime/runtime';
import React, { useEffect, useRef, useState } from 'react';

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import './styles.css';
import microPhoneIcon from '../../assets/microphone.png';

export const Mic = () => {
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
        console.log('adicionar lógica para voltar uma página');
        resetTranscript();
      } else if (transcript.includes('próxima')) {
        console.log('adicionar lógica para passar uma página');
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

  return (
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

      {options && (
        <div className="options-container">
          <h1>Diga o que deseja</h1>
          <h2>{options}</h2>
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
  );
};
