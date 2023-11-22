import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { PerfilButton } from '.';
import { AuthProvider } from '../../contexts/AuthContext';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Testes PerfilButton', () => {
  test('Renderiza corretamente', () => {
    expect(
      render(
        <AuthProvider>
          <BrowserRouter>
            <PerfilButton />
          </BrowserRouter>
        </AuthProvider>
      )
    );
  });

  test('Renderiza corretamente o botão', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <PerfilButton />
        </BrowserRouter>
      </AuthProvider>
    );
    const perfilButton = screen.getByText('Perfil');
    expect(perfilButton).toBeInTheDocument();
  });

  test('Clique no botão abre as opções de perfil', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <PerfilButton />
        </BrowserRouter>
      </AuthProvider>
    );
    const perfilButton = screen.getByText('Perfil');
    fireEvent.click(perfilButton);
    const cuidadorOption = screen.getByText('Cuidador');
    const sairOption = screen.getByText('Sair');
    expect(cuidadorOption).toBeInTheDocument();
    expect(sairOption).toBeInTheDocument();
  });

  test('Clique em "Cuidador" navega para a página correspondente', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <PerfilButton />
        </BrowserRouter>
      </AuthProvider>
    );
    const perfilButton = screen.getByText('Perfil');
    fireEvent.click(perfilButton);
    const cuidadorOption = screen.getByText('Cuidador');
    fireEvent.click(cuidadorOption);
    expect(mockNavigate).toHaveBeenCalledWith('../cuidador');
  });
});
