import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} from 'react';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Loading } from '../components/Loading';
import { api, setAuthorization } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userLogged, setUserLogged] = useState(
    () => localStorage.getItem('token') !== null
  );
  const [userId, setUserId] = useState(() => {
    const userId = localStorage.getItem('userId') || '';
    return userId;
  });
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('token') || '';
    return token;
  });
  const [tokenCaregiver, setTokenCaregiver] = useState(() => {
    const tokenCaregiver = localStorage.getItem('tokenCaregiver') || '';
    return tokenCaregiver;
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      setAuthorization(token);
    }
  }, [token]);

  async function signIn({ email, password }) {
    if (!email) {
      toast.warn('Entre com o email');
      return;
    }

    if (!password) {
      toast.warn('Entre com a senha');
      return;
    }

    try {
      const response = await api.post('/users/sessions', { email, password });

      if (response.status !== 200) {
        toast.error('Credenciais Incorretas');
        return;
      }

      const newToken = `${response.data.token}`;
      setAuthorization(newToken);
      delete response.data.user.password;
      setUserId(response.data.user.id);
      setToken(newToken);
      setUserLogged(true);
      localStorage.setItem('token', newToken);
      localStorage.setItem('userId', response.data.user.id);
      return true;
    } catch (error) {
      toast.error('Credenciais Incorretas');
    }
  }

  async function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenCaregiver');
    setUserLogged(false);
    setToken('');
    setUserId('');
    setTokenCaregiver('');
  }

  const value = useMemo(
    () => ({
      signIn,
      signOut,
      userId,
      token,
      userLogged,
      loading,
      setLoading,
      tokenCaregiver,
      setTokenCaregiver,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
      <Loading visible={loading} />
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element,
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
