import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen({navigation}:any) {
 // const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button title="login" onPress={() => navigation.navigate('setting')} />
    </View>
  );
}
