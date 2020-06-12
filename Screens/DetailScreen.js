import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailScreen = ({ navigation }) => (
      <View style={styles.container}>
        <Text>DetailScreen screen testing</Text>
        <Button title="go to support page" onPress={() => navigation.navigate('Support')} />

      </View>
    );

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
