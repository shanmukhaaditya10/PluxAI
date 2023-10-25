import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { useAppContext } from '../Contexts/AppContext'

const InputAddEmp = ({values,setValues,field,label,placeholder}) => {
    const {isTablet} = useAppContext()
    const handleInputChange = (field, text) => {
        setValues({
            ...values,
            [field]: text
        });
    };
  return (
    <View style={isTablet()?{
 
    }:{
      width:"100%",
      paddingHorizontal:scale(20),
    }}>
<View className="w-full ">

<Text className="text-[20px] text-[#263238] font-medium" style={{
              fontSize:moderateScale(13)
            }}>{label}</Text>
<TextInput
              placeholder={placeholder}
              className=" text-xl text-black border border-[#2E3192] bg-white rounded-lg "
              placeholderTextColor={'#263238'}

              onChangeText={(text) => handleInputChange(field, text)}
              value={values[field]}
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
</View>
    </View>
  )
}

export default InputAddEmp

const styles = StyleSheet.create({})