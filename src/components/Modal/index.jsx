import React from 'react';

import { X } from 'phosphor-react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function Modal({ setIsOpen, list }) {
  return (
    <Container>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Comandos de voz</h5>
          </div>
          <button
            id="closeModal"
            className="closeBtn"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
          <div className="modalContent">
            <ul>
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

Modal.propTypes = {
  setIsOpen: PropTypes.func,
  list: PropTypes.array,
};
