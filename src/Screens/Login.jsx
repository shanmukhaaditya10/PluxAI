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
import {scale, moderateScale} from 'react-native-size-matters';
import CircleTexture from '../assets/CircleTexture.svg'
import { useAuth } from '../Contexts/AuthContext';
import AlertModal from '../Components/AlertModal';
import jsonData from '../AlertData/AlertData';
import { useAppContext } from '../Contexts/AppContext';

const Login = () => {
  const {isModalVisible,setisModalVisible,isTablet}= useAppContext()
  const {
    username,setUsername,
    password,setPassword,
    verifyUserLocally
     } = useAuth()
  return (
  <KeyboardAvoidingView style={{
     flex:1,
     width:"full"
  }}>
    <ScrollView   
      
    contentContainerStyle={{
     alignItems:"center",
     justifyContent:"center",
     flex:1
    
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
        
          <View className=" justify-center items-center my-4 " >
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
              Login 
            </Text>
            <Text className="text-[#434343] mt-4" style={{fontSize:moderateScale(15)}}>Device Name</Text>
          </View>
          <View className="form w-full items-center px-5 "  >
          <View className="" style={[isTablet()?{marginVertical:moderateScale(15),width:'35%'}:{width:"100%"},{gap:8}]}>
            <InputWithLabel
              label="Username"
              placeholder="Username"
              criteria=""
              data={username}
              setData={setUsername}

            />
            <InputWithLabel
              label="Password"
              placeholder="Password"
              criteria=""
              data={password}
              setData={setPassword}
              isPassword={true}

            />
            
            </View>
            {!Boolean( password && username ) ? <Text className="text-red-700">*please fill all fields</Text>:null}
             <TouchableOpacity className=" bg-[#2E3192] justify-center items-center rounded-md mt-4" 
             disabled={!Boolean( password && username )}
            onPress={()=>verifyUserLocally({

              username,
              password,
         
            })}
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
              }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        <View className="items-center mt-5">
           
           <Text style={{color:"#2E3192",fontSize:moderateScale(15)}}>Forgot password</Text>
        <Footer />
          </View>
 
      </ScrollView>
      </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({})