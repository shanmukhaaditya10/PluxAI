import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login'
import DeviceSetup from '../Screens/DeviceSetup';
import UserSetup from '../Screens/UserSetup';


const AuthStack = () => {
  const Stack = createNativeStackNavigator();
   
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="UserSetup" component={UserSetup} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})