import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import PluxLogo from '../assets/PluxLogo.svg';
import Switch from '../assets/Switch.svg';
import { useNavigation } from '@react-navigation/native';
const SelectPunch = () => {
  const navigation = useNavigation()
  return (
    <View>
          <View className="w-full py-5 px-6 justify-between items-center flex-row ">
        <PluxLogo />
        <TouchableOpacity onPress={()=>navigation.navigate('Admin')}>
        <Switch />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SelectPunch

const styles = StyleSheet.create({})