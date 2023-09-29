import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
 
    <Stack.Screen name="Spalsh" component={Splash} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})