import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export function HelpModal({ setIsOpen, list }) {
  return (
    <Container>
      <div
        className="darkBG"
        data-testid="dark-bg"
        onClick={() => setIsOpen(false)}
      />
      <div className="centered">
        <div className="modal" data-testid="help-modal">
          <div className="modalHeader">
            <h5 className="heading">Comandos de voz</h5>
          </div>
          <div className="modalContent">
            <ul>
              <li>
                <a
                  id="closeModal"
                  data-testid="close-modal"
                  onClick={() => setIsOpen(false)}
                >
                  Fechar - Para fechar ajuda
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
