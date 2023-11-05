import 'regenerator-runtime/runtime';

import React, { useEffect, useRef, useState } from 'react';

import { PlusCircle, Trash, ArrowRight } from 'phosphor-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { toast } from 'react-toastify';

import { Container } from './styles';
import { BackButton } from '../../components/BackButton';
import { ChatButton } from '../../components/ChatButton';
import { ChooseFileModal } from '../../components/ChooseFileModal';
import { HelpButton } from '../../components/HelpButton';
import { TranscriptContainer } from '../../components/TranscriptContainer';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';
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
  const [isOpenChooseFileModal, setIsOpenChooseFileModal] = useState(false);
  const [books, setBooks] = useState([]);
  const { setLoading, user } = useAuth();
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

  async function getBooks() {
    setLoading(true);
    const response = await api.get('/pdfs');

    setBooks(response.data.pdfs);
    setLoading(false);
  }

  async function handleDeletePDF(id) {
    setLoading(true);
    resetTranscript();
    try {
      const response = await api.delete(`/pdfs/${id}`);

      if (response.status === 200) {
        toast.success('Documento excluído com sucesso');
        setLoading(false);
        getBooks();
      }
    } catch (error) {
      toast.error('Erro ao excluir documento');
    }
  }

  async function handleGetPDF(id) {
    setLoading(true);
    resetTranscript();
    try {
      const response = await api.get(`/pdfs/${id}`);
      setPdf(response.data);
      navigate('../leitura');
      setLoading(false);
    } catch (error) {
      toast.error('Erro ao selecionar documento');
    }
  }

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
      handleGetPDF(books[0]?.id);
    } else if (
      transcript.includes('dois') ||
      transcript.includes('2') ||
      transcript.includes('Dois')
    ) {
      handleGetPDF(books[1]?.id);
    } else if (
      transcript.includes('três') ||
      transcript.includes('3') ||
      transcript.includes('Três')
    ) {
      handleGetPDF(books[2]?.id);
    } else if (
      transcript.includes('quatro') ||
      transcript.includes('4') ||
      transcript.includes('Quatro')
    ) {
      handleGetPDF(books[3]?.id);
    } else if (
      transcript.includes('cinco') ||
      transcript.includes('5') ||
      transcript.includes('Cinco')
    ) {
      handleGetPDF(books[4]?.id);
    } else if (
      transcript.includes('seis') ||
      transcript.includes('6') ||
      transcript.includes('Seis')
    ) {
      handleGetPDF(books[5]?.id);
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

  useEffect(() => {
    getBooks();
  }, [user]);

  return (
    <>
      <BackButton page={'../menu'} />

      <Container>
        <div className="listCard">
          <div className="listHeader">
            <p>Livros (max: 6)</p>

            {books.length < 6 ? (
              <a>
                <PlusCircle
                  size={40}
                  onClick={() => setIsOpenChooseFileModal(true)}
                />
              </a>
            ) : (
              <div className="disableFileContainer">
                <a className="disableFileModal">
                  <PlusCircle size={40} />
                </a>
              </div>
            )}
          </div>

          {books.length ? (
            books.map((item, index) => (
              <>
                <div className="listItems">
                  <span>
                    {index + 1} - {item.name}
                  </span>
                  <div>
                    <a>
                      <Trash
                        size={32}
                        onClick={() => handleDeletePDF(item.id)}
                      />
                    </a>
                    <a onClick={() => handleGetPDF(item.id)}>
                      <ArrowRight size={32} />
                    </a>
                  </div>
                </div>
              </>
            ))
          ) : (
            <div className="textContainer">
              <h1>Não existem livros cadastrados</h1>
            </div>
          )}
        </div>

        <TranscriptContainer transcript={transcript} />
      </Container>

      <HelpButton list={optionList} />
      <ChatButton />
      {isOpenChooseFileModal && (
        <ChooseFileModal setIsOpen={setIsOpenChooseFileModal} />
      )}
    </>
  );
};

Biblioteca.propTypes = {
  setPdf: PropTypes.func,
};
