import { StyleSheet, Text, View , TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {scale, moderateScale} from "react-native-size-matters"
import { useAppContext } from '../Contexts/AppContext'
import EyeOn from '../assets/EyeOn.svg'
import EyeOff from '../assets/EyeOff.svg'
const InputWithLabel = ({label,placeholder,criteria,data ,setData,isPassword}) => {
  const {isTablet} = useAppContext()
  const [isVisible , setIsVisible] = useState(false)
  
  return (
      
      <View className="w-full ">

              <Text className="text-[20px] text-[#263238] font-[350]" style={{
                fontSize:moderateScale(13)
              }}>
               {label}
              </Text>
              <View className="flex-col">
                <View className="relative">
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#263238'}
                className=" text-xl text-black border border-[#2E3192] bg-white rounded-lg "
                value={data}
                secureTextEntry={isPassword && !isVisible}
                onChangeText={text=>{setData(text)}}
                style={
                   isTablet()?{
                      padding:scale(5),
                      fontSize:scale(8),
                      width:'full'
                  }: {
                    padding:scale(8),
                    fontSize:scale(12),
                    width:'full'
                }
                }
              />
              {isPassword && 
              <TouchableOpacity className="absolute right-2 bottom-1/2 translate-y-[15px] " onPressIn={()=>setIsVisible(!isVisible)}>
{!isVisible ? <EyeOn width={30} height={30} />:<EyeOff width={30} height={30} />}
               
              </TouchableOpacity>}
              </View>
               
              
             {criteria && <Text className="text-[#8C8CA1] " style={{fontSize:moderateScale(11)}}>
                {criteria}
              </Text>}
                   </View>
        </View>
      
     
  )
}

export default InputWithLabel

const styles = StyleSheet.create({})