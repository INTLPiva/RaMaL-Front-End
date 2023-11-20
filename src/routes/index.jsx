import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import { Biblioteca } from '../pages/Biblioteca';
import { Cadastro } from '../pages/Cadastro';
import { Cuidador } from '../pages/Cuidador';
import { Home } from '../pages/Home';
import { Leitura } from '../pages/Leitura';
import { Login } from '../pages/Login';
import { Menu } from '../pages/Menu';

export function AppRoutes() {
  const [pdf, setPdf] = useState([]);

  const { userLogged } = useAuth();

  return (
    <Routes>
      {/* {userLogged ? <PrivateRoutes /> : <PublicRoutes />} */}
      {userLogged ? (
        <>
          <Route path="/" element={<Menu />} />
          <Route path="/leitura" element={<Leitura pdf={pdf} />} />
          <Route path="/biblioteca" element={<Biblioteca setPdf={setPdf} />} />
          <Route path="/cuidador" element={<Cuidador />} />
          <Route path="*" element={<Menu />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </>
      )}
    </Routes>
  );
}
