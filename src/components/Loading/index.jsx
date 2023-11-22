import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export function Loading({ visible }) {
  return (
    <Container data-testid="loading-container" visible={visible}>
      <div />
    </Container>
  );
}

Loading.propTypes = {
  visible: PropTypes.bool,
};
