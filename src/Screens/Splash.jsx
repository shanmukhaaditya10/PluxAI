import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { useAuth } from '../Contexts/AuthContext'

const Splash = () => {
    const navigation = useNavigation()
    const {userToken} = useAuth()
    useEffect(() => {
      setTimeout(() => {
        {userToken ? navigation.navigate('Home') : navigation.navigate('Login')}
        
      
      },3000)
    
       }
    , [])
    
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:30,fontWeight:'bold',color:"black"}}>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})