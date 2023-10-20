import { TouchableOpacity,Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const CustomButton = ({text,onPress,width,height,color,bgColor,borderColor}) => {
  return (
    <TouchableOpacity onPress={onPress} className="items-center justify-center" style={{width:moderateScale(width),
        height:moderateScale(height),
        borderRadius:moderateScale(9),
        backgroundColor:bgColor,
        borderColor:borderColor,
        borderWidth:1.5
        
        }}>
        <Text style={{
            color:`${color}`,
            fontSize:moderateScale(15),
            
        }}> {text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton