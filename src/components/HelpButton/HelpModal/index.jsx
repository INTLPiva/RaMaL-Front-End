import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export function HelpModal({ setIsOpen, list }) {
  return (
    <Container>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Comandos de voz</h5>
          </div>
          <div className="modalContent">
            <ul>
              <li>
                <a id="closeModal" onClick={() => setIsOpen(false)}>
                  D - Para fechar ajuda
                </a>
              </li>

              {list.map((value, number) => (
                <li key={number}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

HelpModal.propTypes = {
  setIsOpen: PropTypes.func,
  list: PropTypes.array,
};
