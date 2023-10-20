import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import Splash from '../Screens/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeviceSetup from '../Screens/DeviceSetup';


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
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Home" component={HomeStack} />
      </Stack.Navigator>
     
    
  );
}