import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container } from './styles';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';

export const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, setLoading } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit() {
    if (!name) {
      toast.warn('Entre com o nome');
      return;
    }

    if (!email) {
      toast.warn('Entre com o email');
      return;
    }

    if (!password) {
      toast.warn('Entre com a senha');
      return;
    }

    setLoading(true);
    const response = await api.post('/users', { name, email, password });

    if (response.status === 200) {
      const data = { email, password };
      const logged = await signIn(data);
      setLoading(false);
      if (logged) {
        navigate('/');
      }
    }
  }

  return (
    <>
      <Container>
        <Card color={'#FFFFCC'}>
          <>
            <h1 className="title">Cadastro</h1>

            <div className="inputs">
              <Input
                name="Nome"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                name="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                name="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="buttons">
              <button className="cadastrar-button" onClick={handleSubmit}>
                Cadastrar
              </button>
              <button className="voltar-button" onClick={() => navigate('/')}>
                Voltar
              </button>
            </div>
          </>
        </Card>
      </Container>
    </>
  );
};
