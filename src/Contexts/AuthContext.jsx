import React, {createContext, useState, useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useAppContext} from './AppContext';
import alertData from '../AlertData/AlertData';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
  const {IsModalVisible, setisModalVisible,setData} = useAppContext();

  const [clientId, setClientId] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [branchId, setBranchId] = useState('');

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const navigation = useNavigation();
  const storeUserDataLocally = async value => {
    try {
      await AsyncStorage.removeItem("user",(e)=>console.log(e))
      const valueString = JSON.stringify(value);
      await AsyncStorage.setItem(`user`, valueString);
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  };
  const verifyUser = async (value) => {
    try {
      NetInfo.fetch().then(state => {
        if (!state.isConnected) {
          setData(alertData.NetworkError);
          setisModalVisible(!IsModalVisible);

          return;
        }
      });
      
      const deviceCollection = await firestore()
        .collection('Device-data')
        .where('username', '==', username)
        .where('password', '==', password)
        .get()
        .then(data => {
          if (data.size == 1) {
       
            navigation.dispatch(StackActions.replace('AdminHome'));
          } else {
            console.log('no data found');
            setData(alertData.WrongEntry);
            setisModalVisible(!IsModalVisible);
          }
        });
    } catch (error) {
      console.log(error);
      setData(alertData.ServerErrors);
      setisModalVisible(!IsModalVisible);
    }
  };
  const verifyDeviceData = async () => {
    try {
      NetInfo.fetch().then(state => {
        if (!state.isConnected) {
          setData(alertData.NetworkError);
          setisModalVisible(!IsModalVisible);

          return;
        }
      });
      
      const deviceCollection = await firestore()
        .collection('Device-data')
        .where('device_id', '==', deviceId)
        .where('username', '==', username)
        .where('password', '==', password)
        .get()
        .then(data => {
          if (data.size == 1) {
            AsyncStorage.setItem("DeviceDetails",JSON.stringify({deviceId,username,password})).then(res=>console.log(res)).catch(err=>console.log(err))
            setUsername('')
            setPassword("")
            navigation.dispatch(StackActions.replace('Attendance'));
          } else {
            console.log('no data found');
            setData(alertData.WrongEntry);
            setisModalVisible(!IsModalVisible);
          }
        });
    } catch (error) {
      console.log(error);
      setData(alertData.ServerErrors);
      setisModalVisible(!IsModalVisible);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        verifyDeviceData,
        deviceId,
        setDeviceId,
        clientId,
        setClientId,
        email,
        setEmail,
        phone,
        setPhone,
        username,
        setUsername,
        password,
        setPassword,
        reEnterPassword,
        setReEnterPassword,
        storeUserDataLocally,
        verifyUser,
        branchId,
        setBranchId,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
