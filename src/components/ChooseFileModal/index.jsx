import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Container } from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';

export function ChooseFileModal({ setIsOpen }) {
  const [file, setFile] = useState(null);
  // const [bookName, setBookName] = useState('');

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
            {/* <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            /> */}
            <input type="file" accept=".pdf" onChange={handleChangeFile} />
            <button onClick={handleSaveFile}>Salvar</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

ChooseFileModal.propTypes = {
  setIsOpen: PropTypes.func,
};
