import React from 'react';
import {Text, View } from 'react-native';

const Hello=() => {
   
        return(
          <View style={{flex:1}}>
            <View style={{backgroundColor:'green',flex:1}}></View>
            <Text style={{fontSize: 20}}>Hello World ! </Text>
            <View style={{backgroundColor:'blue',flex:2}}></View>
          </View>
        );
      }
    export default Hello;