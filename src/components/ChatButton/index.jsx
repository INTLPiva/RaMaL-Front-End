import React from 'react';

// import axios from 'axios';

import { Container } from './styles';
import { Badge } from '../Badge';

export const ChatButton = () => {
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

  // function sendMessage() {
  //   const parameters = {
  //     chat_id: chatIdMari,
  //     text: 'RaMaL',
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
      <button
        id="chatButton"
        className="button"
        // onClick={() => sendMessage()}
      >
        Chat <Badge text="C" />
      </button>
    </Container>
  );
};
