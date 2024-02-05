import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { HelpModal } from './HelpModal';
import { Button } from './styles';

export const HelpButton = ({ list }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button
        id="helpButton"
        data-testid="help-button"
        onClick={() => setIsOpenModal(true)}
      >
        Ajuda
      </Button>

      {isOpenModal && <HelpModal setIsOpen={setIsOpenModal} list={list} />}
    </>
  );
};

HelpButton.propTypes = {
  list: PropTypes.array,
};
