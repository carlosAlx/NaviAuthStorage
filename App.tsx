import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Router from './src/routers/Router';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View></View>
      <Text>test</Text>
      <Router />      
    </SafeAreaView>
  );
}

export default App;
