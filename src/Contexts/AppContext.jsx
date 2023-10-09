import React,{createContext,useState,useContext} from 'react'
import {getBatteryLevel} from 'react-native-device-info';


const AppContext = createContext()

export function useAppContext() {
    return useContext(AppContext);
  }

  //isVisible
  //Orientation
  //connectivity and battery checks



  const AppProvider = ({children}) => {
     const [isModalVisible, setisModalVisible] = useState(false)

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
isLowBattery()

return (
     <AppContext.Provider value={{isLowBattery,isModalVisible,setisModalVisible}}>
      {children}
     </AppContext.Provider>
    )
  }
  
  export default AppProvider
  