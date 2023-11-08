import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PluxLogo from '../assets/PluxLogo.svg';
import Switch from '../assets/Switch.svg';
import {useNavigation} from '@react-navigation/native';
import {useAppContext} from '../Contexts/AppContext';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';
import AddEmployeeForm from '../Components/AddEmployeeForm';
import Department from '../Components/Department';
const AddEmployee = () => {
  const navigation = useNavigation();
  const {isTablet} = useAppContext();
  const [selectedTab,setSelectedTab] = useState(true)
  const [data, setData] = useState([]);

  const fetchDesignations = async () => {
    try {
      const response = await fetch(
        'https://lionfish-app-zy76m.ondigitalocean.app/uniques?ctype[]=department&iclient=CL0001&ibranch=BR0001',
      );
      const result = await response.json();
      setData(result.designation_options);
    } catch (error) {
      console.error('Error fetching designations:', error);
    }
  };

  useEffect(() => {
    fetchDesignations();
  }, []);

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
    behavior="height"
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
           { selectedTab &&<Text
            className="text-black"
            style={{
              fontSize: moderateScale(20),
            }}>
            Add/Edit Employee
          </Text>}
          <View
          className="w-full"
            style={isTablet()?{
              paddingVertical: 30, 
              flexDirection: 'row',
              justifyContent:"center",
              paddingHorizontal:scale(120)
            }:{
              flexDirection: 'row',
            }}>
              <View className="" style={isTablet()?{
              flexDirection: 'row',
              paddingVertical: 10,    
            }:{
              flexDirection: 'row',
              paddingVertical: 20,    
              paddingHorizontal:moderateScale(30)
            }}>
                <TouchableOpacity  style={[{
                  borderBottomColor:selectedTab?"#2E3192":"#C4C4C4",
                  borderBottomWidth:3,
                  width:"50%"
                }]}
                onPress={()=>setSelectedTab(true)}
                >

              <Text
                className="text-black"
                style={[isTablet()?{
                  fontSize: moderateScale(19),

                }:{
                  fontSize: moderateScale(16),

                }]}>

                Employee Profile
              </Text>
              </TouchableOpacity>

              <TouchableOpacity  style={[{
                  borderBottomColor:selectedTab?"#C4C4C4":"#2E3192",
                borderBottomWidth:3,
                width:"50%"
                }]}
                onPress={()=>setSelectedTab(false)}
                >
      
         
              <Text
                className="text-[#555555] pl-10"
                style={[isTablet()?{
                  fontSize: moderateScale(19),
                }:{
                  fontSize: moderateScale(16),
                }]}>
                Department
              </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
        {selectedTab ? <AddEmployeeForm values={values} setValues={setValues} /> : <Department data={data}/>}

       {selectedTab && <View
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
            onPress={() => navigation.navigate("HowToRegister")}
          />
        </View>}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({});
