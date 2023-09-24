import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Biblioteca } from '../pages/Biblioteca';
import { Cadastro } from '../pages/Cadastro';
import { Home } from '../pages/Home';
import { Leitura } from '../pages/Leitura';
import { Login } from '../pages/Login';
import { Menu } from '../pages/Menu';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/leitura" element={<Leitura />} />
      <Route path="/biblioteca" element={<Biblioteca />} />
    </Routes>
  );
}
