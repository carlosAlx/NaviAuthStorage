import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

function Homecreen() {
  return (
    <View>
      <Text>RApz</Text>
    </View>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
