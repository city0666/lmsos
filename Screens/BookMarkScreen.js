

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookMark = ({ navigation }) => (<View style={styles.container}>
    <Text>support</Text>
    <Button title="libin" onPress={() => navigation.navigate('Home')} />

</View>);

export default BookMark;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });
