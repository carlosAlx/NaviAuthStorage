import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useAuth} from '../context/Auth';
import {MyButton} from '../components/MyButton';

export default function SettingScreen() {
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <MyButton
        style={{backgroundColor: 'red'}}
        onPress={signOut}
        title="Sair do App"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontWeight: 'bold',

    fontSize: 20,
    textAlign: 'center',
  },
  coffText: {
    color: '#550AB1',
    fontWeight: 'bold',
  },
});
