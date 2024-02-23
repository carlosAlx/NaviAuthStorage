import React from 'react';
import Router from './src/routers/Router';
import {AuthProvider} from './src/context/Auth';
import {ThemeProvider} from './src/theme/Theme';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
