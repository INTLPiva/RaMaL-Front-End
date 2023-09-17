import React from 'react';

import { Container } from './styles';
import { Badge } from '../Badge';

export const HelpButton = () => {
  return (
    <Container>
      <button className="button">
        Ajuda <Badge text="A" />
      </button>
    </Container>
  );
};
