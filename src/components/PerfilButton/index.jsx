import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, PerfilOptions } from './styles';
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
    <>
      <Button id="perfilButton" className="button" onClick={handleClick}>
        Perfil
      </Button>

      {isOpenPerfil && (
        <PerfilOptions>
          <li onClick={() => navigate('../cuidador')}>Cuidador</li>
          <li onClick={signOut}>Sair</li>
        </PerfilOptions>
      )}
    </>
  );
};
