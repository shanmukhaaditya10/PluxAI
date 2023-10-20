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
  const [clientId, setClientId] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [branchId, setBranchId] = useState('');
  const {IsModalVisible, setisModalVisible,data,setData} = useAppContext();
  
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [userToken, setUserToken] = useState('aasas');
  const navigation = useNavigation();
  const storeUserDataLocally = async value => {
    try {
      NetInfo.fetch().then(state => {
        if (!state.isConnected) {
          setData(alertData.NetworkError);
          setisModalVisible(!IsModalVisible);

          return;
        }
      });
      const v = await AsyncStorage.getItem(`${username}`);
      if (v != null) {
        console.log('user present');
        navigation.navigate('Login');
      }
      vj = JSON.parse(v);
      const valueString = JSON.stringify(value);
      await AsyncStorage.setItem(`${username}`, valueString);
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  };
  const verifyUserLocally = async value => {
    try {
      const v = await AsyncStorage.getItem(`${username}`);

      if (v != null) {
        vJson = JSON.parse(v);
        if (password == vJson.password) {
          navigation.dispatch(StackActions.replace('Home'));
        } else {
          setData(alertData.WrongPassword);
          setisModalVisible(!IsModalVisible);

          return;
        }
      } else {
        setData(alertData.WrongUsername);
        setisModalVisible(!IsModalVisible);

        return;
      }
    } catch (e) {
      console.log(e);
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
        .where('client', '==', clientId)
        .where('branch', '==', branchId)
        .get()
        .then(data => {
          console.log('data', data.size);
          if (data.size == 1) {
            AsyncStorage.setItem("DeviceDetails",JSON.stringify({deviceId,clientId,branchId})).then(res=>console.log(res)).catch(err=>console.log(err))
            navigation.dispatch(StackActions.replace('Home'));
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
        userToken,
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
        verifyUserLocally,
        branchId,
        setBranchId,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
