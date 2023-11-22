import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export function Input({ name, ...rest }) {
  const dataTestId = `input-${name}`;

  return (
    <Container>
      <input required {...rest} data-testid={dataTestId} />
      <span>{name}</span>
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string,
};
