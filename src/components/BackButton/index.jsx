import React from 'react';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Badge } from '../Badge';

export const BackButton = ({ page, hasBadge = true }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <button id="backButton" className="button" onClick={() => navigate(page)}>
        Voltar {hasBadge ? <Badge text="B" /> : null}
      </button>
    </Container>
  );
};

BackButton.propTypes = {
  page: PropTypes.string,
  hasBadge: PropTypes.bool,
};
