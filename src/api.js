import React, { useEffect, useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
// import {WebView} from 'react-native-webview'

const API = () => {

  const [data, setData] = useState([])
  const getAPIData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json()
    setData(result)
  }
  useEffect(() => {
    getAPIData()
  },[])

  return (
    <ScrollView>
      <Text style={{ fontSize: 25 }}>API  CALLED</Text>
      <View>
      {
        data.length ?
        data.map((item)=><View style={{padding:8, borderBottomColor:'blue', borderBottomWidth:4, marginLeft:4}}>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          </View> ) : <Text>Nothing Available To  Show Buy</Text>
      }
      </View>

    </ScrollView>
  );
}
export default API;