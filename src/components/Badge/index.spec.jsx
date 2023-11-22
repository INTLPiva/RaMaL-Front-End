import React from 'react';

import { render, screen } from '@testing-library/react';

import { Badge } from '.';

describe('Testes Badge', () => {
  test('Renderiza corretamente', () => {
    expect(render(<Badge />));
  });

  test('Renderiza corretamente com o texto fornecido', () => {
    render(<Badge text="A" />);
    const badgeElement = screen.getByText('A');
    expect(badgeElement).toBeInTheDocument();
  });
});
