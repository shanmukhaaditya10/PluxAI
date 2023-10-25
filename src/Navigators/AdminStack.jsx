import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login'
import UserSetup from '../Screens/UserSetup';
import AdminHome from '../Screens/AdminHome';
import IsEmployeeAvailable from '../Screens/IsEmployeeAvailable';
import EditEmployee from '../Screens/EditEmployee';
import AddEmployee from '../Screens/AddEmployee';


const AdminStack = () => {
  const Stack = createNativeStackNavigator();
   
  return (
    <Stack.Navigator screenOptions={{headerShown: false,
      animation:'slide_from_right'
      }}>
    <Stack.Screen name="AdminHome" component={AdminHome} />
    <Stack.Screen name="UserSetup" component={UserSetup} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="IsEmployeeAvailable" component={IsEmployeeAvailable} />
    <Stack.Screen name="EditEmployee" component={EditEmployee} />
    <Stack.Screen name="AddEmployee" component={AddEmployee} />
  </Stack.Navigator>
  )
}

export default AdminStack

const styles = StyleSheet.create({})