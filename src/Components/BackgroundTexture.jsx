import { View, Text } from 'react-native'
import React from 'react'
import {verticalScale ,scale ,moderateVerticalScale} from 'react-native-size-matters'
const BackgroundTexture = () => {
  return (
    <View className="w-screen h-screen items-center left-0 right-0 top-0 bottom-0 absolute ">
    <View className="w-[80%]  h-full relative">
        
        <View className="ellipse2 w-[41vw] h-[41vw] border-[1.35px] border-[#B6B6B6] rounded-full absolute -top-[50%]  "/>
        <View className="ellipse2 w-[36vw] h-[36vw] border-[1.35px] border-[#B6B6B6] rounded-full absolute -top-[50%] right-[10%] "/>
        <View className="ellipse3 w-[30vw] h-[30vw] border-[1.35px] border-[#B6B6B6] rounded-full absolute top-[5%] left-16"/>
        <View className="ellipse4 w-[27vw] h-[27vw] border-[1.35px] border-[#B6B6B6] rounded-full absolute top-[31%] left-20"/>
        <View className="ellipse5 w-[23vw] h-[23vw] border-[1.35px] border-[#B6B6B6] rounded-full absolute bottom-0 left-24"/>
     

    </View>
    </View>
  )
}

export default BackgroundTexture