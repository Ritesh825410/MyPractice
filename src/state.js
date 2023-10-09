import React from 'react';
import { Text, View } from 'react-native';


const State = () => {
  return (
    <View>
      <Text style={{fontSize:40}}>My name is Suraj</Text>
      <State />

    </View>
  )
};

export default State;
