import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { ChatButton } from '.';

describe('Testes ChatButton', () => {
  test('Renderiza corretamente', () => {
    render(<ChatButton />);
    const buttonElement = screen.getByTestId('chat-button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('Abre o modal ao clicar no botão', () => {
    render(<ChatButton />);
    const buttonElement = screen.getByTestId('chat-button');
    fireEvent.click(buttonElement);
    const modalElement = screen.getByTestId('chat-modal');
    expect(modalElement).toBeInTheDocument();
  });

  test('Fecha o modal ao clicar no link de fechar no ChatModal', () => {
    render(<ChatButton />);
    const buttonElement = screen.getByTestId('chat-button');
    fireEvent.click(buttonElement);
    const closeModalLink = screen.getByTestId('close-modal');
    fireEvent.click(closeModalLink);
    const modalElement = screen.queryByTestId('chat-modal');
    expect(modalElement).not.toBeInTheDocument();
  });

  test('Fecha o modal ao clicar no fundo escuro no ChatModal', () => {
    render(<ChatButton />);
    const buttonElement = screen.getByTestId('chat-button');
    fireEvent.click(buttonElement);
    const darkBgElement = screen.getByTestId('dark-bg');
    fireEvent.click(darkBgElement);
    const modalElement = screen.queryByTestId('chat-modal');
    expect(modalElement).not.toBeInTheDocument();
  });
});
