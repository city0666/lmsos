/* eslint-disable import/imports-first */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import 'react-native-gesture-handler';

import React, { useState,useEffect,useContext } from 'react';
import { 
  View, Text, } from 'react-native';import * as Font from 'expo-font';

import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import mainTabScreen from './Screens/MainTabScreen';
import { DrawerContent } from './Screens/DrawerContent';
import BookMark from './Screens/BookMarkScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackScreen from './Screens/RootStackScreen';
import ScreenRouteInner from './Screens/ScreenRouteInner';
import { SplashScreen } from 'expo';
import {Provider as AuthProvider} from './context/AuthContext';
import {Context as AuthContext} from './context/AuthContext';

SplashScreen.preventAutoHide();
setTimeout(SplashScreen.hide, 5000);






      const fetchFonts = () => {
        return Font.loadAsync({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
        });
      };
      
      

const App = () => { 
  const [fontLoaded, setFontLoaded] = useState(false);
  const { state} = useContext(AuthContext);
  
  const token = state.token;

  console.log(token);
  

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  
  return(

  <NavigationContainer>

  {token == null ? (<RootStackScreen></RootStackScreen>):(<ScreenRouteInner></ScreenRouteInner>)}
   
    </NavigationContainer>
  )
}
  

    
    


export default () =>{
  return(
  <AuthProvider>

  <App/>
  </AuthProvider>

  )
};
