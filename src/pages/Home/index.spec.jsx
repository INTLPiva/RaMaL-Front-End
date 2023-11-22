import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Home } from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Testes Home', () => {
  test('Renderiza corretamente', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const titleElement = getByText('RaMaL');
    const descriptionElement = getByText(
      'O sistema com reconhecimento de voz que irá lhe auxiliar na leitura de livros e na comunicação com o cuidador através do Telegram.'
    );
    const entrarButton = getByText('Entrar');
    const cadastrarButton = getByText('Cadastrar');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(entrarButton).toBeInTheDocument();
    expect(cadastrarButton).toBeInTheDocument();
  });

  test('Chama a função de navegação ao clicar no botão "Entrar"', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    fireEvent.click(getByText('Entrar'));
    expect(mockNavigate).toHaveBeenCalledWith('login');
  });

  test('Chama a função de navegação ao clicar no botão "Cadastrar"', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    fireEvent.click(getByText('Cadastrar'));
    expect(mockNavigate).toHaveBeenCalledWith('cadastro');
  });
});
