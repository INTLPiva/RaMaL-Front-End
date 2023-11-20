import React from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Container } from './styles';
import { useAuth } from '../../../contexts/AuthContext';

export function ChatModal({ setIsOpen }) {
  const token = '6256673882:AAE5MbTips7faQXxilM71Ku3evbdqA_sAcM';
  const { tokenCaregiver } = useAuth();

  function sendMessage(text) {
    const parameters = {
      chat_id: tokenCaregiver,
      text,
    };

    axios
      .post(`https://api.telegram.org/bot${token}/sendMessage`, parameters)
      .then((response) => {
        toast.success('Mensagem enviada');
      })
      .catch(() => {
        toast.warn('Erro ao enviar mensagem');
      });
  }

  return (
    <Container>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Comandos do chat</h5>
          </div>
          <div className="modalContent">
            <ul>
              <li>
                <a id="closeModal" onClick={() => setIsOpen(false)}>
                  F - Para fechar chat
                </a>
              </li>
              {/* <li>
                <a
                  id="firstChatOption"
                  // onClick={() => sendMessage('Desejo comer algo, por favor')}
                >
                  E - Desejo comer algo
                </a>
              </li> */}
              <li>
                <a
                  id="secondChatOption"
                  onClick={() =>
                    sendMessage('Preciso que venha aqui, por favor')
                  }
                >
                  O - Preciso que venha aqui
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

ChatModal.propTypes = {
  setIsOpen: PropTypes.func,
  list: PropTypes.array,
};
