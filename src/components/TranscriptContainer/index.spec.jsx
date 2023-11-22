import React from 'react';

import { render, screen } from '@testing-library/react';

import { TranscriptContainer } from '.';

describe('Testes TranscriptContainer', () => {
  test('Renderiza corretamente', () => {
    expect(render(<TranscriptContainer />));
  });

  test('Renderiza corretamente com o transcript', () => {
    const transcriptText = 'Testando o transcript';

    render(<TranscriptContainer transcript={transcriptText} />);

    expect(screen.getByAltText('ramal')).toBeInTheDocument();
    expect(screen.getByText(transcriptText)).toBeInTheDocument();
  });

  test('Renderiza corretamente sem transcript', () => {
    render(<TranscriptContainer />);

    expect(screen.getByAltText('ramal')).toBeInTheDocument();
    expect(screen.queryByText(/transcript/i)).toBeNull();
  });
});
