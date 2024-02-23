import {ReactNode, createContext, useContext, useState} from 'react';

interface AuthData {
  token: string;
  email: string;
  name: string;
}
interface AuthcontextData {
  auth?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthcontextData>(
  {} as AuthcontextData,
);
async function signIn():Promise<AuthData> {}
function signOut() {}

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [auth, setAuth] = useState<AuthData>();
  return (
    <AuthContext.Provider value={(auth, signIn, signOut)}>
      {children}
    </AuthContext.Provider>
  );
};
