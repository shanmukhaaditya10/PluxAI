import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import {verticalScale ,scale, moderateScale} from "react-native-size-matters"
const InputWithLabel = ({label,placeholder,criteria,data ,setData}) => {
  return (
       <View className='space-y-1.5  mb-2 '>
        <View className='' style={{

        }}>

   
              <Text className="text-[20px] text-[#263238] font-[350]" style={{
                fontSize:moderateScale(14)
              }}>
               {label}
              </Text>
              <View className="flex-col">
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#263238'}
                className=" text-xl border border-[#263238] bg-white rounded-lg "
                value={data}
                onChangeText={text=>{setData(text)}}
                style={
                    {
                        padding:verticalScale(4),
                        fontSize:verticalScale(10),
                        width:scale(180)
                    }
                }
              />
              <Text className="text-[#8C8CA1] " style={{fontSize:scale(10)}}>
                {criteria}
              </Text>
                   </View>
              </View>
            </View>
     
  )
}

export default InputWithLabel

const styles = StyleSheet.create({})