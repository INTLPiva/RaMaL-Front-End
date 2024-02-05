import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export function TranscriptContainer({ transcript }) {
  return (
    <Container>
      <p>{transcript}</p>
    </Container>
  );
}

TranscriptContainer.propTypes = {
  transcript: PropTypes.string,
};
