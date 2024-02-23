import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import SettingScreen from '../screen/Settingcreen';
import RegisterScreen from '../screen/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}
