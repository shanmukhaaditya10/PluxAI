import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import PluxLogo from '../assets/PluxLogo.svg';
import Switch from '../assets/Switch.svg';
import {useNavigation} from '@react-navigation/native';
import {useAppContext} from '../Contexts/AppContext';
import {moderateScale, scale} from 'react-native-size-matters';
import InputAddEmp from '../Components/InputAddEmp';
import CustomButton from '../Components/CustomButton';
const EditEmployee = () => {
  const navigation = useNavigation();
  const {isTablet} = useAppContext();
  const [values, setValues] = useState({
    empId: '',
    fullName: '',
    employee: '',
    designation: '',
    department: '',
    reportingManager: '',
    reportingManagerId: '',
    dateOfJoining: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    pincode: '',
    contactNumber: '',
    email: '',
  });

  return (
    <KeyboardAvoidingView
    
      style={{
        flex: 1,
        width: 'full',
      }}>
      <ScrollView
        className="w-full"
        contentContainerStyle={{
          alignItems: 'center',
        }}
        keyboardShouldPersistTaps="handled">
        <View
          className="w-full py-5 px-6 justify-between items-center flex-row "
          style={isTablet() ? {} : {}}>
          <PluxLogo />
          <TouchableOpacity onPress={() => navigation.navigate('Attendance')}>
            <Switch />
          </TouchableOpacity>
        </View>
        <View className="items-center space-y-2">
          <Text
            className="text-black"
            style={{
              fontSize: moderateScale(20),
            }}>
            Edit Employee
          </Text>
          <View
          className="w-full"
            style={isTablet()?{
              paddingVertical: 30, 
              flexDirection: 'row',
              justifyContent:"center",
              paddingHorizontal:scale(120)
            }:{
              display:"none"
            }}>
              <View  style={isTablet()?{
              flexDirection: 'row',
              paddingVertical: 10,    
            }:{}}>

              <Text
                className="text-black"
                style={{
                  fontSize: moderateScale(19),
                  borderBottomColor:"#2E3192",
                  borderBottomWidth:3,
                  width:"50%"
                }}>
                Employee Profile
              </Text>
      
         
              <Text
                className="text-[#555555] pl-10"
                style={{
                  fontSize: moderateScale(19),
                  borderBottomColor:"#C4C4C4",
                  borderBottomWidth:3,
                  width:"50%"


                }}>
                Department
              </Text>
          
            </View>

          </View>
        </View>
        <View
          style={
            isTablet()
              ? {
                  width: '90%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingBottom:30
                }
              : {
                  width: '100%',
                  rowGap: 20,
                  paddingTop: 50,
                }
          }>
          <View
            style={
              isTablet()
                ? {
                    width: '35%',
                    paddingRight: 60,
                    rowGap: 20,
                  }
                : {
                    rowGap: 20,
                  }
            }>
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="empId"
              label="Emp Id No"
              placeholder="Enter Emp Id No"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="fullName"
              label="Full Name"
              placeholder="Full Name"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="employee"
              label="Employee"
              placeholder="Employee"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="designation"
              label="Designation"
              placeholder="Select"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="department"
              label="Department"
              placeholder="Department"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="reportingManager"
              label="Reporting Manager"
              placeholder="Reporting Manager"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="reportingManagerId"
              label="Reporting Manager Id"
              placeholder="Reporting Manager Id"
            />
          </View>
          <View
            style={
              isTablet()
                ? {
                    width: '35%',
                    paddingLeft: 60,
                    rowGap: 20,
                  }
                : {
                    rowGap: 20,
                  }
            }>
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="dateOfJoining"
              label="Date of Joining"
              placeholder="DD/MM/YYYY"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="dateOfBirth"
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="gender"
              label="Gender"
              placeholder="Gender"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="address"
              label="Address"
              placeholder="Address"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="pincode"
              label="Pincode"
              placeholder="Pincode"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="contactNumber"
              label="Contact Number"
              placeholder="Contact Number"
            />
            <InputAddEmp
              values={values}
              setValues={setValues}
              field="email"
              label="Email"
              placeholder="Email"
            />
          </View>
        </View>
        <View
          className="w-full flex-row justify-center py-4"
          style={{columnGap: 30}}>
          <CustomButton
            width={80}
            height={36}
            color="#635BC3"
            text="BACK"
            borderColor="#2E3192"
            onPress={() => navigation.goBack()}
          />
          <CustomButton
            width={80}
            height={36}
            color="white"
            text="NEXT"
            bgColor="#2E3192"
            borderColor="#2E3192"
            // onPress={{}}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditEmployee;

const styles = StyleSheet.create({});
