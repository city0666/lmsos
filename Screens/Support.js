import React from 'react';
import { View, Text,TextInput, Button, StyleSheet } from 'react-native';
import {CATAGORIES, MEALS} from '../Data/dummy-data';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Icon from 'react-native-vector-icons/Ionicons';

  


 const Support = function ({ navigation, route }) {
    // const [postText, setPostText] = React.useState('');
    // const {sree} = route.params;
    //  const {libinid} = route.params;
    //  const lytest = route.params.libinid;
    // const catid =route.params? route.params.categoryId : null;
    // const siva = route.params.siva;
    // const barcardi = route.params.barcardi;
    
 const catid =route.params? route.params.libinid : null;
//const lytesttt = CATAGORIES.find(cat => cat.id === c5 );
const catid01 =route.params.libinid;
const displayedMeals = MEALS.filter(
  meal => meal.categoryIds.indexOf(catid) >= 0
);

// const displayedMeals = MEALS.filter(
//   meal => meal.categoryIds.indexOf(catid01) >= 0
// );
    return (

      <MealList listData={displayedMeals}  navigation={navigation}/>

      
    );
  }

  export const screenOptions = navData => {

    const catId = navData.route.params.libinid;
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

export default Support;
