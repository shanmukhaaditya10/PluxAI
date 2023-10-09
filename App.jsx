import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import AppNavigator from './src/Navigators/AppNavigator'
import AuthProvider from './src/Contexts/AuthContext'
import AppProvider from './src/Contexts/AppContext'


const App = () => {

  return (
    <AppProvider>
    <AuthProvider>
      <AppNavigator/>
    </AuthProvider>
    </AppProvider>

  )
}

export default App

const styles = StyleSheet.create({})