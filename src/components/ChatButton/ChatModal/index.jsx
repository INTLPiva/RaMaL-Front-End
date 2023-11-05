import React from 'react';

// import axios from 'axios';
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
                  // onClick={() => sendMessage('Preciso que venha aqui, por favor')}
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
