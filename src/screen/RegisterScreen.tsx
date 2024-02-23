import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Container, TextTitle} from './styles';
import {MyTextInput} from '../components/MyInputText';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <TextTitle>Register</TextTitle>
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    </Container>
  );
}
