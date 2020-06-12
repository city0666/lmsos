import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// const {data} = this.route.params;


  
  const HomeScreen =function ({ navigation, route }) 
  {

    // React.useEffect(() => {
    //   if (route.params?.post) {
    //     // Post updated, do something with `route.params.post`
    //     // For example, send the post to the server
    //   }
    // }, [route.params?.post]);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Support post"
          onPress={() => navigation.navigate('Newtwo')}

        />
 <Text>home</Text>

      </View>
    );
  }
  
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });
  