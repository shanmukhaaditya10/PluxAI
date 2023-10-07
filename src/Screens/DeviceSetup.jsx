import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import InputWithLabel from '../Components/InputWithLabel';
import {scale, verticalScale, moderateScale,moderateVerticalScale} from 'react-native-size-matters';
import CircleTexture from '../assets/CircleTexture.svg'
import { useAuth } from '../Contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

const DeviceSetup = () => {
  

  const navigation = useNavigation()
  
const {verifyDeviceData,deviceId, setDeviceId,
  clientId, setClientId} = useAuth()


  return (
   <View className="relative flex-1 ">
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
      <ScrollView className="px-4 w-full"  
       contentContainerStyle={{
        alignItems:"center",
        justifyContent:"center"
      }} keyboardShouldPersistTaps="handled">

        <View className= {`items-center justify-center w-full`} >
          
          <View className=" justify-center items-center" style={{padding:moderateVerticalScale(12)}}>
            <Image
              source={require('../assets/UserLogo.png')}
              
              style={{
                width: verticalScale(40),
                height: verticalScale(40),
              }}
            />
            <Text
              className="text-center text-[#262626]  "
              style={{
                fontSize: moderateScale(20),
                marginBottom: moderateScale(3),
              }}>
              Device Setup
            </Text>
          </View>
          <View className="form " >
            <InputWithLabel
              label="Client Id"
              placeholder="Example 1234567890"
              criteria="Enter 12 digit device number"
              data={clientId}
              setData={setClientId}

            />
            <InputWithLabel
              label="Location Id"
              placeholder="Example 645632"
              criteria="The code from your email"
            

            />
            <InputWithLabel
              label="Device Id"
              placeholder="Example 645632"
              criteria="The code from your email"
              data={deviceId}
              setData={setDeviceId}

            />
          </View>
         
         
         
        </View>
        <View className="items-center space-y-1 ">
            <TouchableOpacity className=" bg-[#2E3192] p-2 justify-center items-center rounded-md" 
            onPress={verifyDeviceData}
            style={{
              width:moderateScale(80),
              height:moderateScale(40)
            }}
            >
              <Text className=" text-white text-[16px] font-[600] " style={{
                fontSize:moderateScale(15)
              }}>NEXT</Text>
            </TouchableOpacity>
            <Text className="text-[#8C8CA1]  text-center"  
            style={{
              fontSize:moderateScale(12)
            }}
            >
              Contact support if you don't have the correct information {'\n'}
              <Text className="text-[#2E3192] font-[500]" >
                pluxai@secquraise.com
              </Text>
            </Text>
        <Footer />
          </View>
 
      </ScrollView>
    </View>
 
    </View>

  );
};

export default DeviceSetup;

const styles = StyleSheet.create({});
