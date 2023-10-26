import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
// import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
// import { ChatButton } from '../../components/ChatButton';
// import { HelpButton } from '../../components/HelpButton';
import { Input } from '../../components/Input';
import { useAuth } from '../../contexts/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const { signIn, setLoading } = useAuth();

  async function handleLogin() {
    setLoading(true);
    const data = { email, password };
    const logged = await signIn(data);
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
                {/* <Badge text="1" /> */}
              </button>
              <button className="voltar-button" onClick={() => navigate('/')}>
                Voltar
                {/* <Badge text="2" /> */}
              </button>
            </div>
          </>
        </Card>
      </Container>

      {/* <HelpButton />
      <ChatButton /> */}
    </>
  );
};
