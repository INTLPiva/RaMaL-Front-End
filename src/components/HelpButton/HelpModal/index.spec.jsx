import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { HelpModal } from '.';

describe('Testes HelpModal', () => {
  const mockSetIsOpen = jest.fn();
  const mockList = ['Comando 1', 'Comando 2', 'Comando 3'];

  test('Renderiza corretamente', () => {
    render(<HelpModal setIsOpen={mockSetIsOpen} list={mockList} />);
    const modalElement = screen.getByTestId('help-modal');
    expect(modalElement).toBeInTheDocument();
  });

  test('Fecha o modal ao clicar no fundo escuro', () => {
    render(<HelpModal setIsOpen={mockSetIsOpen} list={mockList} />);
    const darkBgElement = screen.getByTestId('dark-bg');
    fireEvent.click(darkBgElement);
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  test('Fecha o modal ao clicar no link de fechar', () => {
    render(<HelpModal setIsOpen={mockSetIsOpen} list={mockList} />);
    const closeModalLink = screen.getByTestId('close-modal');
    fireEvent.click(closeModalLink);
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  test('Renderiza a lista de comandos', () => {
    render(<HelpModal setIsOpen={mockSetIsOpen} list={mockList} />);
    mockList.forEach((command) => {
      const commandElement = screen.getByText(command);
      expect(commandElement).toBeInTheDocument();
    });
  });
});
