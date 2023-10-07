import React,{createContext,useState,useContext} from 'react'
import firestore from '@react-native-firebase/firestore';


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext);
  }
 

  


const AuthProvider = ({children}) => {
  const [deviceId, setDeviceId] = useState('')
  const [clientId, setClientId] = useState('')
  const verifyDeviceData=async () =>{
    try {

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
    clientId, setClientId
   }}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
