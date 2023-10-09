import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import {Text, View,Button,StyleSheet } from 'react-native';


const Login=() => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [display,setDisplay]=useState(false);
  const [reset,setReset]=useState(false)
  hello=() =>{
  setName("")
  setPassword("")
  setDisplay("")
  setEmail("")

  }

        return(
          <ScrollView>
            <Text style={{color:'red',fontSize:100}}>
                LOGIN PAGE
            </Text>
            <TextInput style={styles.textInput} placeholder='Enter Name' onChangeText={(text)=>setName(text)}
            value={name}
            />
              <TextInput style={styles.textInput} placeholder='Enter Email' onChangeText={(text)=>setEmail(text)}
            value={email}
            />
              <TextInput style={styles.textInput} placeholder='Enter Passoword' onChangeText={(text)=>setPassword(text)}
            value={password}
            secureTextEntry={true}
            />
            <View style={{margin:12}} >
            <Button title='Print Details' onPress={()=>setDisplay(true)} />
            </View>
            <Button title='Clear Details'  onPress={hello} />
            {
              display ?
              <View>
                <Text style={{fontSize:45}}>The user name is : {name} </Text>
                <Text style={{fontSize:45}}>The user email is : {email}</Text>
                <Text style={{fontSize:45}}>The user password is : {password}</Text>
              </View>:null
            }
</ScrollView>
        );
      }
    export default Login;

    const styles=StyleSheet.create({
      textInput:{
        borderWidth:1,
        color:'red',
        fontSize:20,
        paddingBottom:5,
        margin:4,
        borderColor:'blue'
      }
    })