import React from 'react';

// import axios from 'axios';
import { X } from 'phosphor-react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function ChatModal({ setIsOpen }) {
  // const token = '6256673882:AAE5MbTips7faQXxilM71Ku3evbdqA_sAcM';

  // const chatIdMari = '6618987688';

  // function getData() {
  //   axios
  //     .get(`https://api.telegram.org/bot${token}/getUpdates`)
  //     .then((response) => {
  //       console.log('Dados recebidos:', response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao fazer requisição:', error);
  //     });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  // function sendMessage(text) {
  //   const parameters = {
  //     chat_id: chatIdMari,
  //     text: text,
  //   };

  //   axios
  //     .post(`https://api.telegram.org/bot${token}/sendMessage`, parameters)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao fazer requisição POST:', error);
  //     });
  // }

  return (
    <Container>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Comandos do chat</h5>
          </div>
          <button
            id="closeModal"
            className="closeBtn"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
          <div className="modalContent">
            <ul>
              <li>
                <a
                  id="firstChatOption"
                  // onClick={() => sendMessage('Desejo ir ao banheiro')}
                >
                  D - Desejo ir ao banheiro
                </a>
              </li>
              <li>
                <a
                  id="secondChatOption"
                  // onClick={() => sendMessage('Desejo comer algo')}
                >
                  E - Desejo comer algo
                </a>
              </li>
              <li>
                <a
                  id="thirdChatOption"
                  // onClick={() => sendMessage('Desejo que venha aqui')}
                >
                  F - Desejo que venha aqui
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
