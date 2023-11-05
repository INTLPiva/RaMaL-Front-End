import React, { useState } from 'react';

// import { Gear } from 'phosphor-react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { useAuth } from '../../contexts/AuthContext';

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
        {/* <Gear size={40} /> */}
        Perfil
      </button>

      {isOpenPerfil && (
        <div className="perfilOptions">
          <ul>
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
