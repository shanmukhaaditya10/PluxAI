import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login'
import DeviceSetup from '../Screens/DeviceSetup';
import Splash from '../Screens/Splash';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
   
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
 
    <Stack.Screen name="Spalsh" component={Splash} />
    <Stack.Screen name="DeviceSetup" component={DeviceSetup} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})