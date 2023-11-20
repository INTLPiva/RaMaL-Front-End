import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const { signIn, setLoading, setTokenCaregiver } = useAuth();

  async function handleLogin() {
    setLoading(true);
    const data = { email, password };
    const logged = await signIn(data);
    const userId = localStorage.getItem('userId');

    try {
      const response = await api.get(`/caregivers/${userId}`);

      localStorage.setItem('tokenCaregiver', response.data.token);
      setTokenCaregiver(response.data.token);
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
    if (logged) {
      navigate('/');
    }
  }

  return (
    <>
      <Container>
        <Card>
          <>
            <h1 className="title">Login</h1>

            <div className="inputs">
              <Input
                name="Email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                name="Senha"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="buttons">
              <button className="entrar-button" onClick={handleLogin}>
                Entrar
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
