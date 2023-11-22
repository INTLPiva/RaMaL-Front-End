import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';

import { ChooseFileModal } from '.';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

jest.mock('../../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}));

jest.mock('../../services/api', () => ({
  api: {
    post: jest.fn(),
  },
}));

describe('Testes ChooseFileModal', () => {
  const mockSetIsOpen = jest.fn();
  const mockSetLoading = jest.fn();

  beforeEach(() => {
    useAuth.mockReturnValue({
      setLoading: mockSetLoading,
    });

    api.post.mockResolvedValue({ status: 200 });
  });

  test('Renderiza corretamente', () => {
    render(<ChooseFileModal setIsOpen={mockSetIsOpen} />);
    const modalElement = screen.getByTestId('choose-file-modal');
    expect(modalElement).toBeInTheDocument();
  });

  test('Fecha o modal ao clicar no fundo escuro', () => {
    render(<ChooseFileModal setIsOpen={mockSetIsOpen} />);
    const darkBgElement = screen.getByTestId('dark-bg');
    fireEvent.click(darkBgElement);
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  test('Atualiza o estado do arquivo ao escolher um arquivo', () => {
    render(<ChooseFileModal setIsOpen={mockSetIsOpen} />);
    const fileInput = screen.getByLabelText('Escolher arquivo');
    const mockFile = new File(['book'], 'book.pdf', {
      type: 'application/pdf',
    });
    fireEvent.change(fileInput, { target: { files: [mockFile] } });
    expect(screen.getByText('book.pdf')).toBeInTheDocument();
  });

  test('Chama a API para salvar o arquivo corretamente', async () => {
    render(<ChooseFileModal setIsOpen={mockSetIsOpen} />);
    const fileInput = screen.getByLabelText('Escolher arquivo');
    const mockFile = new File(['book'], 'book.pdf', {
      type: 'application/pdf',
    });
    fireEvent.change(fileInput, { target: { files: [mockFile] } });
    const saveButton = screen.getByText('Salvar');
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/pdfs', expect.any(FormData));
      expect(mockSetLoading).toHaveBeenCalledWith(true);
      expect(mockSetLoading).toHaveBeenCalledWith(false);
      expect(mockSetIsOpen).toHaveBeenCalledWith(false);
    });
  });

  test('Exibe erro ao falhar ao chamar a API', async () => {
    api.post.mockRejectedValueOnce(new Error('API Error'));

    render(<ChooseFileModal setIsOpen={mockSetIsOpen} />);
    const fileInput = screen.getByLabelText('Escolher arquivo');
    const mockFile = new File(['book'], 'book.pdf', {
      type: 'application/pdf',
    });
    fireEvent.change(fileInput, { target: { files: [mockFile] } });
    const saveButton = screen.getByText('Salvar');
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/pdfs', expect.any(FormData));
      expect(mockSetLoading).toHaveBeenCalledWith(true);
      expect(toast.error).toHaveBeenCalledWith('Erro ao adicionar Documento');
      expect(mockSetLoading).toHaveBeenCalledWith(false);
    });
  });
});
