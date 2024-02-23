import {ReactNode, createContext, useContext, useState} from 'react';
import {authService} from '../services/authService';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface AuthData {
  token: string;
  email: string;
  name: string;
  isLoading?: boolean;
}
interface AuthcontextData {
  auth?: AuthData;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthcontextData>(
  {} as AuthcontextData,
);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [auth, setAuth] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(true);

  async function signIn(email: string, password: string) {
    try {
      const authData = await authService.signIn(email, password);

      setAuth(authData);
      AsyncStorage.setItem('@AuthData', JSON.stringify(authData));
    } catch (error) {
      Alert.alert(error.message, 'Tente novamente');
    }
  }
  async function signOut() {
    setAuth(undefined);
    AsyncStorage.removeItem('@AuthData');
  }
  return (
    <AuthContext.Provider value={{auth, signIn, signOut, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthcontextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
