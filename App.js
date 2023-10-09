import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/navigation.js'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Ritesh</Text>
      <Nav />

    </View>
  )
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
});
