import { StackActions, useNavigation } from '@react-navigation/native'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { useAuth } from '../Contexts/AuthContext'
import {moderateVerticalScale} from 'react-native-size-matters'
import CircleTexture from '../assets/CircleTexture.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Splash = ({navigation}) => {
    
    const checkIfDeviceSetup = async () => {

      const deviceSetup = await AsyncStorage.getItem('DeviceDetails')
      if(deviceSetup){
        return true
      }else{

        return false

      }
    
    }
    useEffect(() => {
      checkIfDeviceSetup().then(res=>console.log(res))
      setTimeout(() => {
        
        checkIfDeviceSetup().then(res=>{
          res ?navigation.dispatch(StackActions.replace('Attendance')) : navigation.dispatch(StackActions.replace('DeviceSetup'))
        }) 
        
      
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