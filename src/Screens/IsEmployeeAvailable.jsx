import { StyleSheet, Text, View,TouchableOpacity,TextInput, ScrollView} from 'react-native'
import React, { useState } from 'react'
import PluxLogo from '../assets/PluxLogo.svg';
import Switch from '../assets/Switch.svg';
import { moderateScale } from 'react-native-size-matters';
import UserLogo from '../assets/UserLogo.svg'
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../Contexts/AppContext';
import AlertModal from '../Components/AlertModal';
import AddEmployeeModal from '../Components/AddEmployeeModal';

const IsEmployeeAvailable = () => {
  const navigation = useNavigation()
  const {isTablet,checkEmpId,isModalVisible,setisModalVisible,alertData}= useAppContext()
  const [text, setText] = useState('')
  return (
   <ScrollView className="flex-1" contentContainerStyle={
    {
      alignItems:"center",
    }
   } keyboardShouldPersistTaps={'handled'}>
    <AddEmployeeModal isVisible={isModalVisible} setIsVisible={setisModalVisible}
data={alertData}
/>
 <View className="w-full py-5 px-6 justify-between items-center flex-row">
        <PluxLogo />
        <TouchableOpacity>
        <Switch />
        </TouchableOpacity>
      </View>
      <View className="items-center space-y-2">
        <Text className="text-black" style={{
          fontSize:moderateScale(20)
        }}>Add/Edit Employee</Text>
        <Text className="text-[#434343]" style={{
          fontSize:moderateScale(16)
        }}>Device Name</Text>
      </View>
      <View className="mt-20 items-center">
        <UserLogo/>
        <Text className="text-[#434343]" style={isTablet()?{
          fontSize:moderateScale(13)
        }:{}}>Enter Employee ID</Text>
      </View>
      <View className="px-8 items-start pt-10 space-y-2" style={isTablet()?{
        width:"45%"
      }:{
        width:"100%"
      }}>
        <Text className="text-[#434343] font-medium">Emp ID No</Text>
        <View className="border border-[#2E3192] w-full rounded-md bg-[#F2F5F7]">

        <TextInput placeholder='Enter Emp Id No' placeholderTextColor={"#4F5B62"}
        className="text-black"
        value={text}
        onChangeText={(e)=>setText(e)}
        />
      
        </View> 
        <View className="w-full flex-row justify-end pt-3"
        style={{columnGap:10}}
        >
         <CustomButton width={75} height={35} color="#635BC3" text="BACK" borderColor="#2E3192" onPress={()=>navigation.goBack()}/>
         <CustomButton width={75} height={35} color="white" text="NEXT" bgColor="#2E3192" borderColor="#2E3192" onPress={()=>checkEmpId(text)} />
        </View>
      </View>
      
   </ScrollView>
  )
}

export default IsEmployeeAvailable

const styles = StyleSheet.create({})