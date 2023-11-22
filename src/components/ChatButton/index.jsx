import React, { useState } from 'react';

import { ChatModal } from './ChatModal';
import { Container } from './styles';
import { Badge } from '../Badge';

export const ChatButton = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Container>
      <button
        id="chatButton"
        data-testid="chat-button"
        className="button"
        onClick={() => setIsOpenModal(true)}
      >
        Chat <Badge text="C" />
      </button>

      {isOpenModal && <ChatModal setIsOpen={setIsOpenModal} />}
    </Container>
  );
};
