import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import PluxLogo from '../assets/PluxLogo.svg';
import Switch from '../assets/Switch.svg';
import OptionsCard from '../Components/OptionsCard';
import AddEmployeeIcon from '../assets/AddEmployeeIcon.svg';
import AttendanceInfo from '../assets/AttendanceInfo.svg';
import ListOfEmployeesIcon from '../assets/ListOfEmployeesIcon.svg';
import SettingsIcon from '../assets/SettingsIcon.svg';
import Footer from '../Components/Footer';
import { useNavigation } from '@react-navigation/native';

const AdminHome = () => {
  const navigation = useNavigation()
  return (
    <View className="flex-1 bg-[#EDEDED]">
      <View className="w-full py-5 px-6 justify-between items-center flex-row ">
        <PluxLogo />
        <TouchableOpacity onPress={()=>navigation.navigate("Attendance")}>
        <Switch />
        </TouchableOpacity>
      </View>
      <View className="w-full items-center py-4">
        <Text className="text-black" style={{
          fontSize:moderateScale(20),
        }}>Device Name</Text>
        <View className="flex-row gap-6 items-center justify-center pt-2">

        <Text className="text-black">Device ID No</Text>     
        <Text className="text-black">Device IP Address</Text>     
        
        </View>
      </View >
   <View className="w-full items-center" style={{
      rowGap:40,
      paddingTop:moderateScale(20)
     }}>

     <View className=' flex-row 'style={{
      columnGap:40
     }} >
    <OptionsCard bgColor='#2E3192' icon={AddEmployeeIcon} title='ADD/EDIT EMPLOYEES' onPress={()=>navigation.navigate("IsEmployeeAvailable")}/>
    <OptionsCard bgColor='#D1D1E0' icon={ListOfEmployeesIcon} title='LIST OF EMPLOYEES'/>
      
     </View>
     <View className=' flex-row 'style={{
      columnGap:40
     }} >
    <OptionsCard bgColor='#D1D1E0' icon={AttendanceInfo} title='ATTENDANCE INFO'/>
    <OptionsCard bgColor='#D1D1E0' icon={SettingsIcon} title='SETTINGS'/>
      
     </View>
 </View>
 <View className="flex-1 justify-end">

<Footer/>
 </View>
    </View>
  );
};

export default AdminHome;

const styles = StyleSheet.create({});
