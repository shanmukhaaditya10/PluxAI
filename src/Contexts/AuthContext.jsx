import React,{createContext,useState,useContext} from 'react'
import firestore from '@react-native-firebase/firestore';
import { useAppContext } from './AppContext';
import alertData from '../AlertData/AlertData'
import NetInfo from "@react-native-community/netinfo"
const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext);
  }
 

  


const AuthProvider = ({children}) => {
  const [deviceId, setDeviceId] = useState('')
  const [clientId, setClientId] = useState('')
  const {IsModalVisible,setisModalVisible} = useAppContext()
  const [data,setData] = useState()

  
  const verifyDeviceData=async () =>{
    try {
      NetInfo.fetch().then(state => {
       
         if (!state.isConnected) {
          setData(alertData.NetworkError) 
          setisModalVisible(!IsModalVisible)
          
          return
 
       }
});
    
      const deviceCollection = await firestore().collection('Device-data')
      .where('device_id', '==', deviceId)
      .where("client",'==',clientId)
      .get().then(data=>{
        console.log('data',data.size);
        if(data.size == 1){
          navigation.navigate('UserSetup')
        }else{
          console.log("no data found");
        }
      })
      
    } catch (error) {
      console.log(error);
    }
    } 
    const [userToken, setUserToken] = useState('aasas')
  return (
   <AuthContext.Provider value={{userToken,verifyDeviceData
    , setDeviceId,
    clientId, setClientId,data
   }}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
