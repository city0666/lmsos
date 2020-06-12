/* eslint-disable import/no-unresolved */
/* eslint-disable import/imports-first */

import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Support from './Support';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Newone from './Newone';
import Newtwo from './Newtwo';
//const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const newoneStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const mainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Detail"
      activeColor="#e91e63"
     
    >
      <Tab.Screen
        name="Detail"
        component={newoneStackScreen}
        options={{
          tabBarLabel: 'Detail',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),}}/>
      <Tab.Screen
        name="Newtwo"
        component={Newtwo}
        options={{
          tabBarLabel: 'Newtwo',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    
    </Tab.Navigator>
);
 
// const HomeStackScreen = props => (
//   // eslint-disable-next-line no-unused-expressions
//   <HomeStack.Navigator   
//   screenOptions={{

//     headerStyle: {
//       backgroundColor: '#009387',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     }
//  }}>
//         <HomeStack.Screen name="Newtwo" component={Newtwo} />

//       </HomeStack.Navigator>
// );



const DetailStackScreen = ({ navigation, route }) => {
  <DetailStack.Navigator>
        <DetailStack.Screen name="Newtwo" component={Newtwo} />


  </DetailStack.Navigator>


}
const newoneStackScreen = props => (
  <newoneStack.Navigator
    screenOptions={{

     headerStyle: {
       backgroundColor: '#009387',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     }
  }}
  >
 <newoneStack.Screen
// options={({ route }) => ({ title: route.params.name })}
name="Detail" component={Newone}
 options={
   { 
   headerLeft: () => (<Icon.Button name="ios-menu" size={25} onPress={() => { navigation.openDrawer(); }}/>) 
 }}
        />
        
      </newoneStack.Navigator>
);
export default mainTabScreen;
