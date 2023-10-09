import React from 'react';
import {Text, View,Button } from 'react-native';
import {WebView} from 'react-native-webview'

const Web=() => {
   
        return(
          <View>
            {/* <Button title='Press Here TO visit the website' onPress={()=>{
                Date()    
            }} /> */}
          <WebView source={{uri:"https://www.udemy.com/"}} />
          <Text>HOW ARE YOU</Text>
          </View>
        );
      }
    export default Web;