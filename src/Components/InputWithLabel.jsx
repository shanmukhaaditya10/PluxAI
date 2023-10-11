import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import {scale, moderateScale} from "react-native-size-matters"
import { useAppContext } from '../Contexts/AppContext'
const InputWithLabel = ({label,placeholder,criteria,data ,setData}) => {
  const {isTablet} = useAppContext()
  return (
       <View className='space-y-1.5 w-full px-8'>
        <View className=' '>

   
              <Text className="text-[20px] text-[#263238] font-[350]" style={{
                fontSize:moderateScale(13)
              }}>
               {label}
              </Text>
              <View className="flex-col">
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#263238'}
                className=" text-xl border border-[#2E3192] bg-white rounded-lg "
                value={data}
                onChangeText={text=>{setData(text)}}
                style={
                   !isTablet()? {
                        padding:scale(8),
                        fontSize:scale(12),
                        width:'full'
                    }:{
                      padding:scale(5),
                      fontSize:scale(8),
                      width:'full'
                  }
                }
              />
              <Text className="text-[#8C8CA1] " style={{fontSize:moderateScale(11)}}>
                {criteria}
              </Text>
                   </View>
              </View>
            </View>
     
  )
}

export default InputWithLabel

const styles = StyleSheet.create({})