import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { HelpModal } from './HelpModal';
import { Container } from './styles';
import { Badge } from '../Badge';

export const HelpButton = ({ list }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Container>
      <button
        id="helpButton"
        data-testid="help-button"
        className="button"
        onClick={() => setIsOpenModal(true)}
      >
        Ajuda <Badge text="A" />
      </button>

      {isOpenModal && <HelpModal setIsOpen={setIsOpenModal} list={list} />}
    </Container>
  );
};

HelpButton.propTypes = {
  list: PropTypes.array,
};
