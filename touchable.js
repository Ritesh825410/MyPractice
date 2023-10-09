import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TouchableHighlight, View } from 'react-native';
const Hello = () => {

    return (
        <View>
            <TouchableHighlight>
                <Text style={styles.b1}>Hello</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.b1}>Hello</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.b1}>Hello2</Text>
            </TouchableHighlight>
        </View>
    );
}
export default Hello;

const styles=StyleSheet.create({
    b1:{
        backgroundColor:'blue',
        fontSize:40,
        borderRadius:20,
        marginTop:10,
        padding:20,
        color:'white'
    }
})