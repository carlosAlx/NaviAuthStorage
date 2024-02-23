import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {AuthContext, useAuth} from '../context/Auth';

const Stack = createNativeStackNavigator();

export default function Router() {
  const {auth} = useAuth();
  return (
    <NavigationContainer>
      {auth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
