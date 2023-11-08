import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useAppContext} from '../Contexts/AppContext';
import {moderateScale, scale} from 'react-native-size-matters';

const EnumDropdown = ({options, label,field,values,setValues}) => {
  const {isTablet} = useAppContext();
  const [selected, setSelected] = useState(false);

  const onSelect=(option)=>{
    setValues({
      ...values,
      [field]: option
  });
  setSelected(false)
  }
  return (
    <View
      style={
        isTablet()
          ? {}
          : {
              width: '100%',
              paddingHorizontal: scale(20),
            }
      }>
      <View className="w-full ">
        <Text
          className="text-[20px] text-[#263238] font-medium"
          style={{
            fontSize: moderateScale(13),
          }}>
          {label}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setSelected(!selected);
            console.log(selected);
          }}
          className=" text-xl text-black border border-[#2E3192] bg-white rounded-lg "
          style={
            isTablet()
              ? {
                  padding: scale(5),
                  fontSize: scale(8),
                  width: 'full',
                }
              : {
                  padding: scale(8),
                  fontSize: scale(12),
                  width: 'full',
                }
          }>
          <Text className="text-[#263238] text-xl">{values[field]?values[field]:"Select"}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={
          selected
            ? {
                display: 'flex',
                width:"100%",
              }
            : {
                display: 'none',
              }
        }>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            className="w-full border bg-white"
            style={{
              padding: scale(7),

            }}
            onPress={() => onSelect(option.Designation)}
          >
            <Text className="text-black text-xl">{option.Designation}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default EnumDropdown;

const styles = StyleSheet.create({});
