import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export const Badge = ({ text }) => {
  return <Container>{text}</Container>;
};

Badge.propTypes = {
  text: PropTypes.string,
};
