import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminHome from '../Screens/AdminHome';
import IsEmployeeAvailable from '../Screens/IsEmployeeAvailable';
import PluxLogo from '../assets/PluxLogo.svg';
import Switch from '../assets/Switch.svg';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (

   
    <Stack.Navigator screenOptions={{headerShown: false,
    animation:'slide_from_right'
    }} >
      
    <Stack.Screen name="AdminHome" component={AdminHome} />
    <Stack.Screen name="IsEmployeeAvailable" component={IsEmployeeAvailable} />
  </Stack.Navigator>


  )
}

export default HomeStack

const styles = StyleSheet.create({})