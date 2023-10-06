import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Initial from '../Screens/Initial';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
 
    <Stack.Screen name="Initial" component={Initial} />
  </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})