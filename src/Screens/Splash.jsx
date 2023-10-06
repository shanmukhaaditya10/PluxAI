import { useNavigation } from '@react-navigation/native'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { useAuth } from '../Contexts/AuthContext'
import {moderateVerticalScale} from 'react-native-size-matters'
import CircleTexture from '../assets/CircleTexture.svg'
const Splash = () => {
    const navigation = useNavigation()
    const {userToken} = useAuth()
    useEffect(() => {
      setTimeout(() => {
        {userToken ? navigation.navigate('Home') : navigation.navigate('Auth')}
        
      
      },3000)
    
       }
    , [])
    
  return (
    <View className="flex-1 bg-[#1D1D1C] ">
<CircleTexture width={Dimensions.get("screen").width} height={Dimensions.get("screen").height} style={{position:"absolute"}}/>
      <View className="flex-1 justify-center items-center">

  <Image source={require('../assets/PluxLogo.png')} style={{
  width:moderateVerticalScale(200) ,height:moderateVerticalScale(100)
  }}/>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})