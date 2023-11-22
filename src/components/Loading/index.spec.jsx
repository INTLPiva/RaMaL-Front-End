import React from 'react';

import { render, screen } from '@testing-library/react';

import { Loading } from '.';

describe('Testes Loading', () => {
  test('Renderiza corretamente', () => {
    expect(render(<Loading />));
  });

  test('Renderiza corretamente quando visível', () => {
    render(<Loading visible={true} />);
    const loadingElement = screen.getByTestId('loading-container');
    expect(loadingElement).toBeInTheDocument();
  });
});
