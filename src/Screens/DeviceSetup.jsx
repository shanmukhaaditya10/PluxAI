import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import InputWithLabel from '../Components/InputWithLabel';
import {scale, moderateScale,moderateVerticalScale} from 'react-native-size-matters';
import CircleTexture from '../assets/CircleTexture.svg'
import { useAuth } from '../Contexts/AuthContext';
import AlertModal from '../Components/AlertModal';
import jsonData from '../AlertData/AlertData'
import { useAppContext } from '../Contexts/AppContext';
const DeviceSetup = ({}) => {
  const {isModalVisible,setisModalVisible,isTablet}= useAppContext()

const {verifyDeviceData,deviceId, setDeviceId,
  clientId, setClientId,branchId,setBranchId,

} = useAuth()





  return (
    <KeyboardAvoidingView style={{
      flex:1,
      width:"full"
   }}>
   <View className="relative flex-1 ">
  
<AlertModal isVisible={isModalVisible} setIsVisible={setisModalVisible}
data={jsonData}
/>
      

    <View
    style={{
      backgroundColor: '#EDEDED',
      flex:1,
      
    }}
  >
    
   <CircleTexture width={Dimensions.get("screen").width} height={Dimensions.get("screen").height}  style={{position:"absolute"}}/>
      <Image
        source={require('../assets/PluxLogo.png')}
        fill
        className="absolute top-10 left-10 "
        style={{width:scale(100), height:scale(45)}}
      />
      <ScrollView className="w-full px-5 "  
      
       contentContainerStyle={{
        alignItems:"center",
        flex:1,
        justifyContent:"center"
        

      }} keyboardShouldPersistTaps="handled">

        <View className= {`items-center justify-center w-full`} >
          
          <View className=" justify-center items-center" style={{}}>
            <Image
              source={require('../assets/UserLogo.png')}
              
              style={isTablet()?{
                width: scale(35),
                height:scale(35),
              }:{
                width: scale(60),
                height:scale(60),
              }}
            />
            <Text
              className="text-center text-[#262626]  "
              style={isTablet()?{
                fontSize: moderateScale(20),
               
              }:{
                fontSize: moderateScale(22),
               
              }}>
              Device Setup
            </Text>
          </View>
          <View className="form  w-full  justify-center items-center"  style={isTablet()?{marginVertical:moderateScale(15),width:'35%'}:{marginVertical:moderateScale(15)}}>
            <InputWithLabel
              label="Client Id"
              placeholder="Example 1234567890"
              criteria="Enter 12 digit device number"
              data={clientId}
              setData={setClientId}

            />
            <InputWithLabel
              label="Branch Id"
              placeholder="Example 645632"
              criteria="The code from your email"
              data={branchId}
              setData={setBranchId}
            

            />
            <InputWithLabel
              label="Device Id"
              placeholder="Example 645632"
              criteria="The code from your email"
              data={deviceId}
              setData={setDeviceId}

            />
             <TouchableOpacity className=" bg-[#2E3192] justify-center items-center rounded-md mt-4"
             disabled={!Boolean( clientId && branchId && deviceId )} 
            onPress={verifyDeviceData}
            style={isTablet?{
              width:moderateScale(75),
              height:moderateScale(35)
            }:{
              width:moderateScale(70),
              height:moderateScale(32)
            }}
            >
              <Text className=" text-white text-[16px] font-[600]  " style={{
                fontSize:moderateScale(14)
              }}>NEXT</Text>
            </TouchableOpacity>
          </View>
         
         
         
        </View>
        <View className="items-center ">
           
            <Text className="text-[#8C8CA1]  text-center px-2"  
            style={{
              fontSize:moderateScale(12)
            }}
            >
              Contact support if you don't have the correct information   
                <Text className="text-[#2E3192] font-[500] " >{'\n'} 
                   pluxai@secquraise.com
              </Text>
            </Text>
          </View>
        <Footer />
 
      </ScrollView>
    </View>
 
    </View>
    </KeyboardAvoidingView>

  );
};

export default DeviceSetup;

const styles = StyleSheet.create({});
