import React, { useState } from 'react';

import { ChatModal } from './ChatModal';
import { Button } from './styles';

export const ChatButton = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button
        id="chatButton"
        data-testid="chat-button"
        onClick={() => setIsOpenModal(true)}
      >
        Chat
      </Button>

      {isOpenModal && <ChatModal setIsOpen={setIsOpenModal} />}
    </>
  );
};
