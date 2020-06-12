import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/color';

const MainButton = props => (<TouchableOpacity onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>);

const styles = StyleSheet.create({

    button: {
        backgroundColor: Colors.buttonred,
        padding: 12,
        borderRadius: 20,
        shadowColor: 'black',
         shadowOpacity: 0.8,
         elevation: 6,
         shadowRadius: 15,
          shadowOffset: { width: 56, height: 13 },
        

    },
    buttonText: {
        color: Colors.bgmain,
        fontSize: 18
    }

});

export default MainButton;
