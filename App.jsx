import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/Navigators/AppNavigator'
import AuthProvider from './src/Contexts/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator/>

    </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({})