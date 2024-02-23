import {ReactNode, createContext, useContext, useState} from 'react';
import {authService} from '../services/authService';
import {Alert} from 'react-native';

export interface AuthData {
  token: string;
  email: string;
  name: string;
}
interface AuthcontextData {
  auth?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthcontextData>(
  {} as AuthcontextData,
);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [auth, setAuth] = useState<AuthData>();

  async function signIn(email: string, password: string) {
    try {
      const authData = await authService.signIn(email, password);
      setAuth(authData);
    } catch (error: any) {
      Alert.alert(error.message, 'Tente novamente');
    }
  }
  async function signOut() {
    setAuth(undefined);
    return;
  }
  return (
    <AuthContext.Provider value={(auth, signIn, signOut)}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
