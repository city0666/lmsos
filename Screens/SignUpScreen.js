import React ,{useState,useContext} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Dimensions,
    Button,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constants/color';
import {Context as AuthContext} from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';


const SignUpScreen = ({navigation}) => {
    //name,email,Password,passwordConfirm
    const { state, signup } = useContext(AuthContext);
    const [name, setName] = useState('sreeraj');
    const [email, setEmail] = useState('sreeraj@sreeraj.com');
    const [role, setRole] = useState('driver');

    const [password, setPassword] = useState('sreeraj123');
    const [passwordConfirm  , setPasswordCon  ] = useState('sreeraj123');

  return (
   <View style={styles.container}>
  <Text>Name</Text>
  <TextInput
      placeholder ="enter your Name"
      value = {name}
      onChangeText = {setName}
      autoCapitalize = "none"
      autoCorrect = {false}
  />
   
  <Text>Email</Text>

  <TextInput
      placeholder ="enter your Email"
      value = {email}
      onChangeText = {setEmail}
      autoCapitalize = "none"
      autoCorrect = {false}
  />
  <Text>Password </Text>

<TextInput
    placeholder ="enter your Password"
    secureTextEntry
    value = {password}
      onChangeText = {setPassword}
      autoCapitalize ="none"
      autoCorrect = {false}
      
/>  
<Text>Password Confirm</Text>

  <TextInput
      placeholder ="enter your Password Confirm"
      secureTextEntry
      value = {passwordConfirm}
      onChangeText = {setPasswordCon}
      autoCapitalize ="none"
      autoCorrect = {false}
      
  />
  {state.errorMessage?(
    <Text>{state.errorMessage}</Text>) : null}
<Button
title= 'SignUp'
onPress={() => signup ({ name,email,password,passwordConfirm,role }, Alert.alert('success',role))}
></Button>
  
   </View>
  );
};

export default SignUpScreen;
const {height} = Dimensions.get("screen");
 const height_logo = height * 0.28;
 const newLocal = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.buttongreen ,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
   
        flex: 2,
        justifyContent: 'center',
         alignItems:'center'
    
  },
  logo: {
    width: height_logo,
    height: height_logo,
    
},
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 3,
      borderTopRightRadius: 55,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
  },
  signIn: {
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginTop:0
    
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});
