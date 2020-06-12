import React from 'react';
import { TextInput, StyleSheet,Text } from 'react-native';

const MainInput = props => {
return(
<TextInput
{...props}
placeholder= {props.Text}
style = {{ ...styles.input, ...props.style }} ></TextInput>

);};
const styles = StyleSheet.create({

input: {
    height: 60,
    width:300,
    marginVertical: 20,
    borderRadius:25 , 
    borderWidth: 1 ,
    borderColor: 'white',
    color: 'white',
    marginVertical: 20
    }
});
   

export default MainInput;

