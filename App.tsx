import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import Router from './src/routers/Router';
import {AuthProvider} from './src/context/Auth';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
