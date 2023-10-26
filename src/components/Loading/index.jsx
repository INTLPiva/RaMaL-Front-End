import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export function Loading({ visible }) {
  return (
    <Container visible={visible}>
      <div />
    </Container>
  );
}

Loading.propTypes = {
  visible: PropTypes.bool,
};
