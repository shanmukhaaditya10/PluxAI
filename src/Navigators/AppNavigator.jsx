import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { useAuth } from '../Contexts/AuthContext';


export default function AppNavigator() {
const {userToken} = useAuth()
  return (

    <NavigationContainer>
      {userToken ?<HomeStack/>:<AuthStack/> }
     
    </NavigationContainer>
  );
}