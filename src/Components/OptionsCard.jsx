import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { isTablet } from 'react-native-device-info'
import { moderateScale, scale } from 'react-native-size-matters'
const OptionsCard = ({bgColor,icon,title,onPress}) => {
  const DynamicIcon = icon;
  return (
    <View className='items-center space-y-2.5 ' style={{
      width:moderateScale(130),
      height:moderateScale(130),
      
    }}>
    <TouchableOpacity  activeOpacity={0.7} className={`bg-[${bgColor}] border-[1.5px] border-[#2E3192] items-center justify-center `} 
       style={isTablet()?{
        width:moderateScale(100),
        height:moderateScale(100),
        borderRadius:scale(10)
        
      }:{
        width:scale(105),
        height:scale(105),
        borderRadius:scale(10)
      }}
      onPress={onPress}
      >
        {DynamicIcon && <DynamicIcon width='70%' height="70%" />}
       
      
      </TouchableOpacity>
      <Text className="font-medium text-center" style={{
        fontSize:moderateScale(12),
        color:"black"
      }}>{title}</Text>
      </View>
  )
}

export default OptionsCard

const styles = StyleSheet.create({})