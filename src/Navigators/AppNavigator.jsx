import  React from 'react';
import AdminStack from './AdminStack';
import AttendanceStack from './AttendanceStack';
import Splash from '../Screens/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeviceSetup from '../Screens/DeviceSetup';
import UserSetup from '../Screens/UserSetup';


export default function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (

    
     <Stack.Navigator screenOptions={
      {
        headerShown:false
      }
     }>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="DeviceSetup" component={DeviceSetup} />
        {/* for all admin screens */}
   
        
        <Stack.Screen name="Admin" component={AdminStack} />
        {/* for all attendance screens */}
        <Stack.Screen name="Attendance" component={AttendanceStack} />
      </Stack.Navigator>
     
    
  );
}