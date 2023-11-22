import React from 'react';

import { render, screen } from '@testing-library/react';

import { Input } from '.';

describe('Testes Input', () => {
  test('Renderiza corretamente', () => {
    render(<Input name="Teste" />);
    const inputElement = screen.getByTestId('input-Teste');
    expect(inputElement).toBeInTheDocument();
  });

  test('Exibe o nome corretamente', () => {
    render(<Input name="Exemplo" />);
    const spanElement = screen.getByText('Exemplo');
    expect(spanElement).toBeInTheDocument();
  });

  test('Requer o preenchimento', () => {
    render(<Input name="CampoObrigatorio" />);
    const inputElement = screen.getByTestId('input-CampoObrigatorio');
    expect(inputElement).toBeRequired();
  });
});
