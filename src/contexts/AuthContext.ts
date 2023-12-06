import { createContext, useContext } from 'react';

interface AuthContextValue {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextValue>({
  token: null,
  setToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
