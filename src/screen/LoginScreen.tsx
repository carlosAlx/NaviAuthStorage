import React, {useState} from 'react';
import {Image, Switch} from 'react-native';

import {Container} from './styles';
import {useAuth} from '../context/Auth';
import {MyTextInput} from '../components/MyInputText';
import {MyButton} from '../components/MyButton';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth();

  return (
    <Container>
      <Switch />

      <Image resizeMode="contain" style={{width: 100, height: 100}} />
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <MyButton onPress={() => signIn(email, password)} title="Entrar no App" />
    </Container>
  );
}
