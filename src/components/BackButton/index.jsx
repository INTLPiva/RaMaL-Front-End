import React from 'react';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Badge } from '../Badge';

export const BackButton = ({ page }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <button id="backButton" className="button" onClick={() => navigate(page)}>
        Voltar <Badge text="B" />
      </button>
    </Container>
  );
};

BackButton.propTypes = {
  page: PropTypes.string,
};
