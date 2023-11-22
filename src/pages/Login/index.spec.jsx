import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Login } from '.';
import { AuthProvider } from '../../contexts/AuthContext';
import { api } from '../../services/api';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('react-toastify', () => ({
  toast: {
    warn: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock('../../services/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

describe('Testes Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Renderiza corretamente', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Entrar')).toBeInTheDocument();
    expect(screen.getByText('Voltar')).toBeInTheDocument();
  });

  test('Chama a função de navegação ao clicar no botão "Voltar"', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Voltar'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('Chama a função de toast se o e-mail estiver em branco ao tentar cadastrar', async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Entrar'));
    await waitFor(() => {
      expect(toast.warn).toHaveBeenCalledWith('Entre com o email');
    });
  });

  test('Chama a função de toast se a senha estiver em branco ao tentar cadastrar', async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );

    fireEvent.change(screen.getByTestId('input-Email'), {
      target: { value: 'mock@email.com' },
    });
    fireEvent.click(screen.getByText('Entrar'));
    await waitFor(() => {
      expect(toast.warn).toHaveBeenCalledWith('Entre com a senha');
    });
  });

  test('Chama a API ao clicar no botão "Entrar"', async () => {
    api.get.mockResolvedValueOnce({ data: { token: 'mockedToken' } });

    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );

    fireEvent.change(screen.getByTestId('input-Email'), {
      target: { value: 'mock@email.com' },
    });
    fireEvent.change(screen.getByTestId('input-Senha'), {
      target: { value: 'senha123' },
    });

    fireEvent.click(screen.getByText('Entrar'));

    await waitFor(() => {
      expect(api.get).toHaveBeenCalled();
      expect(localStorage.getItem('tokenCaregiver')).toEqual('mockedToken');
    });
  });
});
