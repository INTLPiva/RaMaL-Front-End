import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('Testes App', () => {
  test('Renderiza corretamente', () => {
    expect(render(<App />));
  });
});
