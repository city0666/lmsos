import React, { Component } from 'react';
import { View, Image, Button,Text,  FlatList , TouchableOpacity, StyleSheet,} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

 
const  NewFaverite = function ({ navigation, route }) {
 
   

   return (
       <View style={styles.screen}>
           <Text>
               test
           </Text>
       </View>
   )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default NewFaverite ;