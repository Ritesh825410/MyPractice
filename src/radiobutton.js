import React, { useState } from 'react';
import {ActivityIndicator, Button, Platform, Text, View } from 'react-native';

const Hello=() => {
    const[show,Hide]=useState(false)
    hello=()=>{
        Hide(true)
    }
    setTimeout(()=>{
        Hide(false)
    },5000)
   const [oss,upos]=useState('')
   jio=()=>{
    upos(Platform.OS)
   }
        return(
          <View style={{color:'red'}}>
           <ActivityIndicator color="blue" size={50} animating={show}>
           </ActivityIndicator>
           <Text>I am using : {oss}</Text>
           <Button title='Press To Show Loader' onPress={hello}></Button>
           <Button title='Press To Show Loader' onPress={jio}  color={'green'}></Button>
          </View>
        );
      }
    export default Hello;