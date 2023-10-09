import React, { useState } from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';


const Modal = () => {
    const[display,setDisplay]=useState(false)
    return (
      <View>
        {
            display ?
            
        <View style={hello.modal}>
            <Text style={{fontSize:23}}> I am A MODAL</Text>
                <Button title='close me' onPress={()=>{setDisplay(false)}}></Button>
                </View>:null   
        }

<Button title='open moadal' onPress={()=>{setDisplay(true)}}></Button>

        
      </View>
    )
  };
  
export default Modal;

const hello = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
    },
    modal:{
        height:267,
        width:156,
        backgroundColor:'white'
    }
})