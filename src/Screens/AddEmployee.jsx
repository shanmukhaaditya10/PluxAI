import { StyleSheet, Text, View ,TouchableOpacity, KeyboardAvoidingView, ScrollView, TextInput} from 'react-native'
import React, { useState } from 'react'
import PluxLogo from '../assets/PluxLogo.svg';
import Switch from '../assets/Switch.svg';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../Contexts/AppContext';
import InputWithLabel from '../Components/InputWithLabel';
import { moderateScale, scale } from 'react-native-size-matters';
import InputAddEmp from '../Components/InputAddEmp';
const AddEmployee = () => {
    const navigation=useNavigation()
    const {isTablet} = useAppContext()
    const [values,setValues] = useState({
        empId:"",
        fullName:"",
        employee:"",
        designation:"",
        department:"",
        reportingManager:"",
        dateOfJoining:"",
        dateOfBirth:"",
        gender:"",
        address:"",
        pincode:"",
        contactNumber:"",
        email:"",
    })
    const handleInputChange = (field, text) => {
      setValues({
          ...values,
          [field]: text
      });
  };
  return (
    <KeyboardAvoidingView style={{
      flex:1,
      width:"full"
   }} >
     <ScrollView className="w-full"  
       
     contentContainerStyle={{
      alignItems:"center",
     
    }} keyboardShouldPersistTaps="handled">
      <View className="w-full py-5 px-6 justify-between items-center flex-row " style={isTablet()?{}:{}}>
        <PluxLogo />
        <TouchableOpacity onPress={()=>navigation.navigate("Attendance")}>
        <Switch />
        </TouchableOpacity>
      </View>
      <View className="items-center space-y-2">
        <Text
          className="text-black"
          style={{
            fontSize: moderateScale(20),
          }}>
          Add/Edit Employee
        </Text>
        <Text
          className="text-[#434343]"
          style={{
            fontSize: moderateScale(16),
          }}>
          Device Name
        </Text>
      </View>
      <View className='w-full pb-10' style={{
        rowGap:20
      }}>

    <InputAddEmp values={values} setValues={setValues} field='empId' label="Emp Id No" placeholder='Enter Emp Id No'/>
    <InputAddEmp values={values} setValues={setValues} field='fullName' label="Full Name" placeholder='Full Name'/>
    <InputAddEmp values={values} setValues={setValues} field='employee' label="Employee" placeholder='Employee'/>
    <InputAddEmp values={values} setValues={setValues} field='designation' label="Designation" placeholder='Select'/>
    <InputAddEmp values={values} setValues={setValues} field='department' label="Department" placeholder='Department'/>
    <InputAddEmp values={values} setValues={setValues} field='reportingManager' label="Reporting Manager" placeholder='Reporting Manager'/>
    <InputAddEmp values={values} setValues={setValues} field='dateOfJoining' label="Date of Joining" placeholder='DD/MM/YYYY'/>
    <InputAddEmp values={values} setValues={setValues} field='dateOfBirth' label="Date of Birth" placeholder='DD/MM/YYYY'/>
    <InputAddEmp values={values} setValues={setValues} field='gender' label="Gender" placeholder='Gender'/>
    <InputAddEmp values={values} setValues={setValues} field='address' label="Address" placeholder='Address'/>
    <InputAddEmp values={values} setValues={setValues} field='pincode' label="Pincode" placeholder='Pincode'/>
    <InputAddEmp values={values} setValues={setValues} field='contactNumber' label="Contact Number" placeholder='Contact Number'/>
    <InputAddEmp values={values} setValues={setValues} field='email' label="Email" placeholder='Email'/>  


</View>
      </ScrollView>
    </KeyboardAvoidingView >
  )
}

export default AddEmployee

const styles = StyleSheet.create({})