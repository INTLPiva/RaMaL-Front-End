import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export function TranscriptContainer({ transcript }) {
  return (
    <Container>
      <img className="ramal" src="/src/assets/ramal.png" alt="ramal" />
      <p className="transcript">{transcript}</p>
    </Container>
  );
}

TranscriptContainer.propTypes = {
  transcript: PropTypes.string,
};
