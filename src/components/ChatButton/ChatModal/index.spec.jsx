import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { ChatModal } from '.';
import { useAuth } from '../../../contexts/AuthContext';

jest.mock('axios');
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock('../../../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('Testes ChatModal', () => {
  const mockSetIsOpen = jest.fn();
  const mockTokenCaregiver = '123456789';
  const mockUseAuth = {
    tokenCaregiver: mockTokenCaregiver,
  };

  beforeEach(() => {
    useAuth.mockReturnValue(mockUseAuth);
    axios.post.mockResolvedValue({ status: 200 });
  });

  test('Renderiza corretamente', () => {
    render(<ChatModal setIsOpen={mockSetIsOpen} />);
    const modalElement = screen.getByTestId('chat-modal');
    expect(modalElement).toBeInTheDocument();
  });

  test('Fecha o modal ao clicar no fundo escuro', () => {
    render(<ChatModal setIsOpen={mockSetIsOpen} />);
    const darkBgElement = screen.getByTestId('dark-bg');
    fireEvent.click(darkBgElement);
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  test('Chama a API para enviar mensagem corretamente', async () => {
    render(<ChatModal setIsOpen={mockSetIsOpen} />);
    const sendMessageButton = screen.getByText('O - Preciso que venha aqui');
    fireEvent.click(sendMessageButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(expect.any(String), {
        chat_id: mockTokenCaregiver,
        text: 'Preciso que venha aqui, por favor',
      });
      expect(toast.success).toHaveBeenCalledWith('Mensagem enviada');
    });
  });

  test('Exibe aviso ao falhar ao chamar a API', async () => {
    axios.post.mockRejectedValueOnce(new Error('API Error'));

    render(<ChatModal setIsOpen={mockSetIsOpen} />);
    const sendMessageButton = screen.getByText('O - Preciso que venha aqui');
    fireEvent.click(sendMessageButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(expect.any(String), {
        chat_id: mockTokenCaregiver,
        text: 'Preciso que venha aqui, por favor',
      });
      expect(toast.error).toHaveBeenCalledWith('Erro ao enviar mensagem');
    });
  });
});
