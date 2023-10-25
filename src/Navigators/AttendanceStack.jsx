import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectPunch from '../Screens/SelectPunch';
const Stack = createNativeStackNavigator();
const AttendanceStack = () => {
  return (

   
    <Stack.Navigator screenOptions={{headerShown: false,
    animation:'slide_from_right'
    }} >
      <Stack.Screen name="SelectPunch" component={SelectPunch} />
  
  </Stack.Navigator>


  )
}

export default AttendanceStack

const styles = StyleSheet.create({})