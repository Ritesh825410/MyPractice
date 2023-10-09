import React, { useState } from 'react';
import { Button ,Text, View } from 'react-native';

const User=() => {
const [num,Setnum]=useState(0)
function hello(){
  Setnum(num+1)
}
    return(
      <View >
        <Text style={{fontSize: 20}}>Hello World ! {num}</Text>
        <Button title='press here' onPress={hello} color={'green'}/>
      </View>
    );
  }
export default User;