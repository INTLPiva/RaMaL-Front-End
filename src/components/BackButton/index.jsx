import React from 'react';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Button } from './styles';

export const BackButton = ({ page }) => {
  const navigate = useNavigate();

  return (
    <Button id="backButton" onClick={() => navigate(page)}>
      Voltar
    </Button>
  );
};

BackButton.propTypes = {
  page: PropTypes.string,
};
