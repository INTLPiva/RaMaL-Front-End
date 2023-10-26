import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} from 'react';

import { toast } from 'react-toastify';

import { Loading } from '../components/Loading';
import { api, setAuthorization } from '../services/api';

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [userLogged, setUserLogged] = useState(
    () => localStorage.getItem('token') !== null
  );
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem('user') || {};
    return user;
  });
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('token') || '';
    return token;
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
      setUser(response.data.user);
      setToken(newToken);
      setUserLogged(true);
      localStorage.setItem('token', newToken);
      localStorage.setItem('user', response.data.user);
      return true;
    } catch (error) {
      toast.error('Credenciais Incorretas');
    }
  }

  async function signOut() {
    localStorage.removeItem('token');
    setUserLogged(false);
    setToken('');
    setUser('');
  }

  const value = useMemo(
    () => ({
      signIn,
      signOut,
      user,
      token,
      userLogged,
      loading,
      setLoading,
    }),
    [token]
  );

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <AuthContext.Provider value={value}>
      {children}
      <Loading visible={loading} />
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
