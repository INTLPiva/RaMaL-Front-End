import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { HelpButton } from '.';

describe('Testes HelpButton', () => {
  const mockList = ['Comando 1', 'Comando 2', 'Comando 3'];

  test('Renderiza corretamente', () => {
    render(<HelpButton list={mockList} />);
    const buttonElement = screen.getByTestId('help-button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('Abre o modal ao clicar no botão', () => {
    render(<HelpButton list={mockList} />);
    const buttonElement = screen.getByTestId('help-button');
    fireEvent.click(buttonElement);
    const modalElement = screen.getByTestId('help-modal');
    expect(modalElement).toBeInTheDocument();
  });

  test('Fecha o modal ao clicar no link de fechar no HelpModal', () => {
    render(<HelpButton list={mockList} />);
    const buttonElement = screen.getByTestId('help-button');
    fireEvent.click(buttonElement);
    const closeModalLink = screen.getByTestId('close-modal');
    fireEvent.click(closeModalLink);
    const modalElement = screen.queryByTestId('help-modal');
    expect(modalElement).not.toBeInTheDocument();
  });

  test('Fecha o modal ao clicar no fundo escuro no HelpModal', () => {
    render(<HelpButton list={mockList} />);
    const buttonElement = screen.getByTestId('help-button');
    fireEvent.click(buttonElement);
    const darkBgElement = screen.getByTestId('dark-bg');
    fireEvent.click(darkBgElement);
    const modalElement = screen.queryByTestId('help-modal');
    expect(modalElement).not.toBeInTheDocument();
  });
});
