import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Biblioteca } from '../pages/Biblioteca';
import { Cadastro } from '../pages/Cadastro';
import { Home } from '../pages/Home';
import { Leitura } from '../pages/Leitura';
import { Login } from '../pages/Login';
import { Menu } from '../pages/Menu';

export function AppRoutes() {
  const [pdf, setPdf] = useState('/pdfs/o_pequeno_principe.pdf');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/leitura" element={<Leitura pdf={pdf} />} />
      <Route path="/biblioteca" element={<Biblioteca setPdf={setPdf} />} />
    </Routes>
  );
}
