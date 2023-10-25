import { useNavigation } from '@react-navigation/native';
import React,{createContext,useState,useContext} from 'react'
import {getBatteryLevel,isTablet} from 'react-native-device-info';
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alertData from '../AlertData/AlertData';

const AppContext = createContext()

export function useAppContext() {
    return useContext(AppContext);
  }

  const AppProvider = ({children}) => {
     const [isModalVisible, setisModalVisible] = useState(false)
     const [data, setData] = useState();
     const [clientId,setClientId] = useState();
    const navigation = useNavigation();
const isLowBattery=()=>{
     getBatteryLevel().then(level=>
        {
            if((level*100)<10){
                return true
            }else{
                return false
            }
        }
        )
}
const checkEmpId =async(id)=>{
    AsyncStorage.getItem("DeviceDetails").then(
        data=>{
        const jsonData = JSON.parse(data)
        setClientId(jsonData.clientId)
        
        firestore().collection(`Employees-${jsonData.clientId}-data`).where("Emp_Id" ,"==",id)
        .get().then(res=>{
            if(res.size == 1){
                console.log("id present");
                navigation.navigate("EditEmployee")

            }else{
                setData(alertData.EmployeeIdNotAvailable)
                setisModalVisible(!isModalVisible)
            }
        }
            )
        }
    )
   
    
}
const AddEmployee=()=>{
return
}
return (
     <AppContext.Provider value={{isLowBattery,isModalVisible,setisModalVisible,isTablet,checkEmpId,data,setData,AddEmployee}}>
         <OrientationLocker
        orientation={isTablet() ? LANDSCAPE : PORTRAIT}
   
      />
      {children}
     </AppContext.Provider>
    )
  }
  
  export default AppProvider
  