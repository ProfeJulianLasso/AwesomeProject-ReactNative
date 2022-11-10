import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {contador}</Text>
      <Fab title="-1" position="bl" onPress={() => setContador(contador - 1)} />
      <Fab title="+1" onPress={() => setContador(contador + 1)} />
      <Fab title="0" position="cn" onPress={() => setContador(0)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
  },
});
