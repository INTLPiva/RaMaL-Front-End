import React from 'react';

import { ArrowLeft } from 'phosphor-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export const BackButton = ({ page }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <a onClick={() => navigate(page)}>
        <ArrowLeft size={48} />
      </a>
    </Container>
  );
};

BackButton.propTypes = {
  page: PropTypes.string,
};
