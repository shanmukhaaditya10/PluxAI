import React,{createContext,useState,useContext} from 'react'
import {getBatteryLevel,isTablet} from 'react-native-device-info';
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";

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

return (
     <AppContext.Provider value={{isLowBattery,isModalVisible,setisModalVisible,isTablet}}>
         <OrientationLocker
        orientation={isTablet() ? LANDSCAPE : PORTRAIT}
   
      />
      {children}
     </AppContext.Provider>
    )
  }
  
  export default AppProvider
  