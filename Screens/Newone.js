import React, { Component } from 'react';
import { View, Image, Button,Text,  FlatList , TouchableOpacity, StyleSheet,} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import CategoryGridTile from '../components/CategoryGridTitle';
import {CATEGORIES} from '../Data/dummy-data';

    
const Newone = function ({ navigation, route }) {
  

    const renderGridItem = (itemData) => {
        return ( 
          


          <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onSelect={() => {
            navigation.navigate( 'Support', 
            {
              libinid: itemData.item.id
            }
            
            );
        
          }}
        />

          
    );
  };
  
  return (
    
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
    
  );
};  

export const screenOptions = navData => {

  //const catId = navData.route.params.libinid;
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return{
    headerTitle: "555",
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    headerLeft: () => 
    (<Icon.Button
     name="ios-save"
      size={25} 
      color='#ff9933'
      backgroundColor='#000' 
      onPress={() => 
      { navData.navigation.navigate( 'FavoritesScreen') }}/>) ,
      headerRight: () => 
      (<Icon.Button
       name="ios-star"
        size={25} 
        color='#f4c430'
        backgroundColor='#fff' 
        onPress={() => 
        { navData.navigation.navigate( 'NewFaverite') }}/>) 

   //title: route.params.lytesttt.name
  }
  
  
  };


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default Newone;