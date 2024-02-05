import 'regenerator-runtime/runtime';

import React, { useEffect, useRef, useState } from 'react';

import { PlusCircle, Trash, ArrowRight } from 'phosphor-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { toast } from 'react-toastify';

import {
  Container,
  Disabled,
  Footer,
  Header,
  ListCard,
  ListHeader,
  ListItems,
  MicrophoneContainer,
  TextContainer,
} from './styles';
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
} from '../../utils/handleClick';
import {
  hasNumber1,
  hasNumber2,
  hasNumber3,
  hasNumber4,
  hasNumber5,
  hasNumber6,
} from '../../utils/hasNumber';

export const Biblioteca = ({ setPdf }) => {
  const [isOpenChooseFileModal, setIsOpenChooseFileModal] = useState(false);
  const [books, setBooks] = useState([]);
  const { setLoading, userId } = useAuth();
  const navigate = useNavigate();

  const [caregiver, setCaregiver] = useState({});

  const optionList = [
    'Voltar - Para voltar para o Menu',
    'Chat - Para abrir o chat',
    'N.º - Para escolher um livro',
  ];

  const { transcript, resetTranscript } = useSpeechRecognition();
  const microphoneRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <MicrophoneContainer>
        Browser is not Support Speech Recognition.
      </MicrophoneContainer>
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
    if (transcript.toLowerCase().includes('ajuda')) {
      resetTranscript();
      handleClickHelpButton();
    } else if (transcript.toLowerCase().includes('voltar')) {
      resetTranscript();
      handleClickBackButton();
    } else if (transcript.toLowerCase().includes('chat')) {
      resetTranscript();
      handleClickChatButton();
    } else if (transcript.toLowerCase().includes('fechar')) {
      resetTranscript();
      handleClickCloseModal();
    } else if (transcript.toLowerCase().includes('chamar')) {
      resetTranscript();
      handleClickFirstChatOption();
    } else if (hasNumber1(transcript)) {
      resetTranscript();
      handleGetPDF(books[0]?.id);
    } else if (hasNumber2(transcript)) {
      resetTranscript();
      handleGetPDF(books[1]?.id);
    } else if (hasNumber3(transcript)) {
      resetTranscript();
      handleGetPDF(books[2]?.id);
    } else if (hasNumber4(transcript)) {
      resetTranscript();
      handleGetPDF(books[3]?.id);
    } else if (hasNumber5(transcript)) {
      resetTranscript();
      handleGetPDF(books[4]?.id);
    } else if (hasNumber6(transcript)) {
      resetTranscript();
      handleGetPDF(books[5]?.id);
    }
  }, [transcript]);

  async function getCaregiver() {
    try {
      setLoading(true);
      const response = await api.get(`/caregivers/${userId}`);

      setCaregiver(response.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    resetTranscript();
    handleListening();
    getCaregiver();
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      resetTranscript();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    getBooks();
  }, [userId]);

  return (
    <>
      <Container>
        <Header>
          <BackButton page={'../menu'} />
          <HelpButton list={optionList} />
        </Header>

        <ListCard>
          <ListHeader>
            <p>Livros (max: 6)</p>

            {books.length < 6 ? (
              <a>
                <PlusCircle
                  size={40}
                  onClick={() => setIsOpenChooseFileModal(true)}
                />
              </a>
            ) : (
              <Disabled>
                <PlusCircle size={40} />
              </Disabled>
            )}
          </ListHeader>

          {books.length ? (
            books.map((item, index) => (
              <ListItems key={index}>
                <span>
                  {index + 1} - {item.name}
                </span>

                <div>
                  <a>
                    <Trash size={32} onClick={() => handleDeletePDF(item.id)} />
                  </a>

                  <a onClick={() => handleGetPDF(item.id)}>
                    <ArrowRight size={32} />
                  </a>
                </div>
              </ListItems>
            ))
          ) : (
            <TextContainer>
              <h1>Não existem livros cadastrados</h1>
            </TextContainer>
          )}
        </ListCard>

        <Footer>
          <img src="/src/assets/ramal.png" alt="ramal" />

          <TranscriptContainer transcript={transcript} />

          {caregiver ? <ChatButton /> : <span />}
        </Footer>
      </Container>

      {isOpenChooseFileModal && (
        <ChooseFileModal setIsOpen={setIsOpenChooseFileModal} />
      )}
    </>
  );
};

Biblioteca.propTypes = {
  setPdf: PropTypes.func,
};
