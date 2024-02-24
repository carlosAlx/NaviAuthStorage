import React, {useContext, useState} from 'react';
import {Image, Switch} from 'react-native';

import {Container, Row} from './styles';
import {useAuth} from '../context/Auth';
import {MyTextInput} from '../components/MyInputText';
import {MyButton} from '../components/MyButton';
import {ThemeType, ThemeContext} from '../theme/Theme';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth();
  const {toggleTheme, theme} = useContext(ThemeContext);
  const navigation = useNavigation();

  const darkModeIsEnabled = theme === ThemeType.dark;
  return (
    <Container>
      <Switch value={darkModeIsEnabled} onValueChange={toggleTheme} />
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Row>
        <MyButton onPress={() => signIn(email, password)} title="Sign-in" />
        <MyButton
          title="Register"
          onPress={() => navigation.navigate('register')}
        />
      </Row>
    </Container>
  );
}
