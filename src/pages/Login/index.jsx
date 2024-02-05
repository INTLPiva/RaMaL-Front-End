import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Buttons, Container, EnterButton, ReturnButton, Title } from './styles';
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
    <Container>
      <Card>
        <Title>Login</Title>

        <div>
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

        <Buttons>
          <EnterButton onClick={handleLogin}>Entrar</EnterButton>
          <ReturnButton onClick={() => navigate('/')}>Voltar</ReturnButton>
        </Buttons>
      </Card>
    </Container>
  );
};
