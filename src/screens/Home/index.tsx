// App.tsx
import React, { useState } from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import { Button } from '@components/Button'; 


const Home = () => {
  const [message, setMessage] = useState('Olá, React Native!');

  const changeMessage = () => {
    setMessage('Texto alterado!');
  };

  return (
    <View style={styles.container}>
      <Button title='teste' type='SECONDARY'></Button>
      <Text style={styles.text}>{message}</Text>
      <Button title="Alterar Textoss" onPress={changeMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
