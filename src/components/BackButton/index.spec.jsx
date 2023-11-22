import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { BackButton } from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Testes BackButton', () => {
  test('Renderiza corretamente', () => {
    expect(render(<BackButton page="/outra-pagina" />));
  });

  test('Chama a função de navegação ao clicar no botão', () => {
    const { getByText } = render(
      <BrowserRouter>
        <BackButton page="/outra-pagina" />
      </BrowserRouter>
    );

    fireEvent.click(getByText('Voltar'));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  test('Passa a página correta para a função de navegação', () => {
    const { getByText } = render(
      <BrowserRouter>
        <BackButton page="/outra-pagina" />
      </BrowserRouter>
    );

    fireEvent.click(getByText('Voltar'));
    expect(mockNavigate).toHaveBeenCalledWith('/outra-pagina');
  });
});
