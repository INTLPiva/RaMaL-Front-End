import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export const Card = ({ children, color = '#F0FFF0' }) => {
  return <Container color={color}>{children}</Container>;
};

Card.propTypes = {
  children: PropTypes.element,
  color: PropTypes.string,
};
