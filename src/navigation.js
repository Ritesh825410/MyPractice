import React from 'react'
import {Text,View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigaor } from '@react-navigation/native-stack'
// import { NavigationContainer } from '@react-navigation/native';'

const Nav = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Nav;