import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { useAuth } from '../../contexts/AuthContext';

export const PerfilButton = () => {
  const navigate = useNavigate();

  const [isOpenPerfil, setIsOpenPerfil] = useState(false);

  const { signOut } = useAuth();

  const handleClick = () => {
    if (isOpenPerfil) {
      setIsOpenPerfil(false);
    } else {
      setIsOpenPerfil(true);
    }
  };

  return (
    <Container>
      <button id="perfilButton" className="button" onClick={handleClick}>
        Perfil
      </button>

      {isOpenPerfil && (
        <div className="perfilOptions">
          <ul>
            <li onClick={() => navigate('../cuidador')}>Cuidador</li>
            <li onClick={signOut}>Sair</li>
          </ul>
        </div>
      )}
    </Container>
  );
};
