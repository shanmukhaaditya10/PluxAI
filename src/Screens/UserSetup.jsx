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
import {scale, moderateScale,moderateVerticalScale} from 'react-native-size-matters';
import CircleTexture from '../assets/CircleTexture.svg'
import { useAuth } from '../Contexts/AuthContext';
import AlertModal from '../Components/AlertModal';
import jsonData from '../AlertData/AlertData'
import { useAppContext } from '../Contexts/AppContext';
const DeviceSetup = ({navigation}) => {
  const {isModalVisible,setisModalVisible,isTablet}= useAppContext()



const {verifyDeviceData,deviceId, setDeviceId,
  clientId, setClientId} = useAuth()


  return (

    <ScrollView className="w-full"  
      
    contentContainerStyle={{
     alignItems:"center",
     justifyContent:"center",
     flex:isTablet()?0:1
    
   }} keyboardShouldPersistTaps="handled">

<AlertModal isVisible={isModalVisible} setIsVisible={setisModalVisible}
data={jsonData}
/>
      
   <CircleTexture width={Dimensions.get("screen").width} height={Dimensions.get("screen").height}  style={{position:"absolute"}}/>
      <Image
        source={require('../assets/PluxLogo.png')}
        fill
        className="absolute top-10 left-10 "
        style={{width:scale(100), height:scale(45)}}
      />
        
          <View className=" justify-center items-center mt-4 " >
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
                fontSize: moderateScale(19),
               
              }:{
                fontSize: moderateScale(22),
               
              }}>
              User Setup
            </Text>
          </View>
          <View className="form w-full items-center px-5 "  >
          <View className="" style={[isTablet()?{marginVertical:moderateScale(15),width:'35%'}:{width:"100%"},{gap:8}]}>
            <InputWithLabel
              label="Email Id"
              placeholder="Email ID"
              criteria=""
              data={clientId}
              setData={setClientId}

            />
            <InputWithLabel
              label="Phone No."
              placeholder="Phone No."
              criteria=""
            

            />
            <InputWithLabel
              label="Username"
              placeholder="Username"
              criteria=""
              data={deviceId}
              setData={setDeviceId}

            />
           
            <InputWithLabel
              label="Password"
              placeholder="Password"
              criteria=""
              data={deviceId}
              setData={setDeviceId}

            />
             <InputWithLabel
              label="Re-Enter Password"
              placeholder="Re-Enter Password"
              criteria=""
              data={deviceId}
              setData={setDeviceId}

            />
            </View>
             <TouchableOpacity className=" bg-[#2E3192] justify-center items-center rounded-md mt-4" 
            onPress={verifyDeviceData}
            style={isTablet()?{
              width:moderateScale(75),
              height:moderateScale(35)
            }:{
              width:moderateScale(75),
              height:moderateScale(39)
            }}
            >
              <Text className=" text-white text-[16px] font-[600]  " style={{
                fontSize:moderateScale(14)
              }}>NEXT</Text>
            </TouchableOpacity>
          </View>
        <View className="items-center mt-5">
           
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
        <Footer />
          </View>
 
      </ScrollView>
 
   

  );
};

export default DeviceSetup;

const styles = StyleSheet.create({});
