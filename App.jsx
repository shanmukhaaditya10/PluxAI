import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import React,{} from 'react'
import AppNavigator from './src/Navigators/AppNavigator'
import AuthProvider from './src/Contexts/AuthContext'
import AppProvider from './src/Contexts/AppContext'
import { NavigationContainer } from '@react-navigation/native'


const App = () => {

  return (

    <NavigationContainer>

    <AppProvider>
    <AuthProvider>   
   
      <AppNavigator/>
      
    </AuthProvider>
    </AppProvider>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})