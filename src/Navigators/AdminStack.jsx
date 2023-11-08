import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login'

import AdminHome from '../Screens/AdminHome';
import IsEmployeeAvailable from '../Screens/IsEmployeeAvailable';
import EditEmployee from '../Screens/EditEmployee';
import AddEmployee from '../Screens/AddEmployee';
import HowToRegister from '../Screens/HowToRegister';


const AdminStack = () => {
  const Stack = createNativeStackNavigator();
   
  return (
    <Stack.Navigator screenOptions={{headerShown: false,
      animation:'slide_from_right'
      }}>
    {/* <Stack.Screen name="Login" component={Login} /> */}
    <Stack.Screen name="AdminHome" component={AdminHome} />
    <Stack.Screen name="IsEmployeeAvailable" component={IsEmployeeAvailable} />
    <Stack.Screen name="EditEmployee" component={EditEmployee} />
    <Stack.Screen name="AddEmployee" component={AddEmployee} />
    <Stack.Screen name="HowToRegister" component={HowToRegister} />
  </Stack.Navigator>
  )
}

export default AdminStack

const styles = StyleSheet.create({})