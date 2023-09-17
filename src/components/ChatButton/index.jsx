import React from 'react';

import { Container } from './styles';
import { Badge } from '../Badge';

export const ChatButton = () => {
  return (
    <Container>
      <button className="button">
        Chat <Badge text="C" />
      </button>
    </Container>
  );
};
