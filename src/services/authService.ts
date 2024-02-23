import {AuthData} from '../context/Auth';


function signIn(email: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123') {
        resolve({token: 'jwt', email, name: 'carlos'});
      } else [reject(new Error('Invalid email or password'))];
    }, 500);
  });
}

export const authService = {
  signIn,
};
