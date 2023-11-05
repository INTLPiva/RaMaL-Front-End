import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Container } from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';

export function ChooseFileModal({ setIsOpen }) {
  const [file, setFile] = useState(null);

  const { setLoading } = useAuth();

  function handleChangeFile(e) {
    setFile(e.target.files[0]);
  }

  async function handleSaveFile() {
    if (file === null) {
      return;
    }

    const data = new FormData();

    data.append('pdf', file);

    try {
      setLoading(true);
      const response = await api.post('/pdfs', data);
      if (response.status === 200) {
        setLoading(false);
        window.location.reload();
      }
    } catch (error) {
      toast.error('Erro ao adicionar Documento');
    }
  }

  return (
    <Container>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Adicione um livro</h5>
          </div>
          <div className="modalContent">
            <label htmlFor="fileInput" className="custom-file-upload">
              {file === null ? 'Escolher arquivo' : file?.name}
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleChangeFile}
              id="fileInput"
            />
            {file !== null ? (
              <button className="save-button" onClick={handleSaveFile}>
                Salvar
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
}

ChooseFileModal.propTypes = {
  setIsOpen: PropTypes.func,
};
