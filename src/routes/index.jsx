import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Leitura } from '../pages/Leitura';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leitura" element={<Leitura />} />
    </Routes>
  );
}
