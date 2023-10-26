import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { Badge } from '../Badge';

export const PerfilButton = () => {
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
        Perfil <Badge text="B" />
      </button>

      {isOpenPerfil && (
        <div className="perfilOptions">
          <ul>
            <li>Informações</li>
            <li>Cuidadores</li>
            <li onClick={signOut}>Sair</li>
          </ul>
        </div>
      )}
    </Container>
  );
};

PerfilButton.propTypes = {
  page: PropTypes.string,
};
