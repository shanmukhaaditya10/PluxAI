import {StyleSheet, Text, View, Modal,TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import { useAppContext } from '../Contexts/AppContext';
import { useNavigation } from '@react-navigation/native';
const AddEmployeeModal = ({isVisible, setIsVisible }) => {
  const {data} = useAppContext()
  const {isTablet} = useAppContext()
  const navigation = useNavigation()
  return (
    <Modal
      animationType="slide"
      className="flex-1"
      transparent={true}
      visible={isVisible}
    >
           
      <View className=" w-full h-full  items-center justify-center px-2" style={{
         backgroundColor:'rgba(67, 67, 67,0.5)'
      }}>
        <View
          className="bg-white items-center text-center px-auto space-y-8 py-4"
          style={{
            maxWidth: isTablet()?moderateScale(240):moderateScale(300),
            borderRadius: moderateScale(25),
            paddingVertical: moderateScale(14),
            paddingHorizontal:moderateScale(20),
          }}>
          <View className="topic mx-10">
         
            <Text style={styles.topic}>{data?.title}</Text>
          </View>
          <View className="body mx-10 ">
            <Text style={styles.body}>
            {data?.body}
             
            </Text>
          </View>
          <View className="button items-center space-y-2.5">
            <TouchableOpacity className=" bg-[#635BC3] border-2 border-[#635BC3] px-4" style={[{
                borderRadius:moderateScale(6),
                alignItems:"center",
                justifyContent:"center",
                padding:moderateScale(2),
                
            },isTablet()?{ width:moderateScale(45),
              height:moderateScale(30),}:{
                height:moderateScale(45)}]} onPress={()=>setIsVisible(!isVisible)}>
                <Text className="text-[#ffffff] font-medium" style={{
                    fontSize:scale(isTablet()? 8:12),
                }} >ADD EMPLOYEE</Text>
            </TouchableOpacity>

            <TouchableOpacity className=" border-2 border-[#635BC3] px-5" 
            onPressIn={()=>{ 
                navigation.goBack()
                setIsVisible(!isVisible)}}
            style={[{
                borderRadius:moderateScale(6),
               
                
                alignItems:"center",
                justifyContent:"center",
                padding:moderateScale(2)
                
            },isTablet()?{ width:moderateScale(45),
              height:moderateScale(30),}:{
                height:moderateScale(40)}]} onPress={()=>{ 
                    
                    setIsVisible(!isVisible)}}>
                <Text className="text-[#2E3192]" style={{
                    fontSize:scale(isTablet()? 8:14),
                }} >GO BACK</Text>
            </TouchableOpacity>
            
            
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddEmployeeModal;

const styles = StyleSheet.create({
  topic: {
    fontSize: moderateScale(18),
    color: 'black',
    textAlign: 'center',
    fontWeight:'300'
  },
  body: {
    fontSize: moderateScale(12),
    color: '#7B7B7B',
    textAlign: 'center',
  },
});
