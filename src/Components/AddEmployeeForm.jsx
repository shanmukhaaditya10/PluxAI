import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect,useState}from 'react'
import InputAddEmp from './InputAddEmp'
import EnumDropdown from './EnumDropdown'
import { useNavigation } from '@react-navigation/native'
import { useAppContext } from '../Contexts/AppContext'

const AddEmployeeForm = ({values,setValues}) => {
    const [designations, setDesignations] = useState([]);
    const navigation = useNavigation();
    const {isTablet} = useAppContext();
    useEffect(() => {
      const fetchDesignations = async () => {
        try {
          const response = await fetch('https://lionfish-app-zy76m.ondigitalocean.app/uniques?ctype[]=department&iclient=CL0001&ibranch=BR0001');
          const data = await response.json();
          const filteredDesignations = data.designation_options.filter(
            (designation) => designation.department === values.department
          );
  
          setDesignations(filteredDesignations);
        } catch (error) {
          console.error('Error fetching designations:', error);
        }
      };
  
      if (values.department) {
        fetchDesignations();
      }
      console.log(designations);
  
      return () => {
        setDesignations([]);
      };
    }, [values.department]);
  
  return (
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
            paddingTop: 10,
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
          field="department"
          label="Department"
          placeholder="Department"
        />
        <EnumDropdown
        options={designations}
        label="Designation"
        setValues={setValues}
        field="designation"
        values={values}
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
  )
}

export default AddEmployeeForm

const styles = StyleSheet.create({})