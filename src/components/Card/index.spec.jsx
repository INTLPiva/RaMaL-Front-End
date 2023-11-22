import React from 'react';

import { render, screen } from '@testing-library/react';

import { Card } from '.';

describe('Testes Card', () => {
  test('Renderiza corretamente', () => {
    expect(render(<Card />));
  });

  test('Renderiza corretamente com as propriedades padrão', () => {
    render(<Card>Conteúdo do card</Card>);
    const cardElement = screen.getByText('Conteúdo do card');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveStyle({ backgroundColor: '#F0FFF0' });
  });

  test('Renderiza corretamente com cor personalizada', () => {
    render(<Card color="#FFFFCC">Conteúdo do card</Card>);
    const cardElement = screen.getByText('Conteúdo do card');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveStyle({ backgroundColor: '#FFFFCC' });
  });
});
