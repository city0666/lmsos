import React, { useContext } from 'react';
import { View, Image, Button,Text,  FlatList , TouchableOpacity, StyleSheet,} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import{Context as AuthContext} from '../context/AuthContext';

 
const FavoritesScreen = function ({ navigation, route }) {
 
    const {signout} = useContext(AuthContext); 

   return (
       <View style={styles.screen}>
           <Text>
               test
           </Text>
           <Button title="sign out" onPress={signout}/>
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

export default FavoritesScreen;