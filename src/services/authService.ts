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

const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
