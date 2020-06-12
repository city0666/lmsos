import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Dimensions,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constants/color';

import { LinearGradient } from 'expo-linear-gradient';


const NewSignIn = ({navigation}) => {

  const [data, setData] = React.useState({
      username: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
  });


  const textInputChange = (val) => {
      if( val.trim().length >= 4 ) {
          setData({
              ...data,
           //   username: val,
              check_textInputChange: true,
              isValidUser: true
          });
      } else {
          setData({
              ...data,
          //    username: val,
              check_textInputChange: false,
              isValidUser: false
          });
      }
  }

  const handlePasswordChange = (val) => {
      if( val.trim().length >= 8 ) {
          setData({
              ...data,
              password: val,
              isValidPassword: true
          });
      } else {
          setData({
              ...data,
              password: val,
              isValidPassword: false
          });
      }
  }

  const updateSecureTextEntry = () => {
      setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
      });
  }

  const handleValidUser = (val) => {
      if( val.trim().length >= 4 ) {
          setData({
              ...data,
              isValidUser: true
          });
      } else {
          setData({
              ...data,
              isValidUser: false
          });
      }
  }

  

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={styles.header}>

<Animatable.Image 
    animation="bounceIn"
    duraton="5000"
source={require('../assets/logo.png')}
style={styles.logo}
resizeMode="center"

/>

          <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View 
          animation="fadeInUpBig"
          style={[styles.footer, {
              backgroundColor: 'white'
          }]}
      >
          <Text style={[styles.text_footer, {
              color: Colors.buttonred
          }]}>Username</Text>
          <View style={styles.action}>
              <FontAwesome 
                  name="user-o"
                  color={Colors.buttonred}
                  size={20}
              />
              <TextInput 
                  placeholder="Your Username"
                  placeholderTextColor="#666666"
                  style={[styles.textInput, {
                      color: Colors.buttonred
                  }]}
                  autoCapitalize="none"
                  onChangeText={(val) => textInputChange(val)}
                  onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
              />
              {data.check_textInputChange ? 
              <Animatable.View
                  animation="bounceIn"
              >
                  <Feather 
                      name="check-circle"
                      color="green"
                      size={20}
                  />
              </Animatable.View>
              : null}
          </View>
          { data.isValidUser ? null : 
          <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
          </Animatable.View>
          }
          

          <Text style={[styles.text_footer, {
              color:  Colors.buttonred
,
              marginTop: 10
          }]}>Password</Text>
          <View style={styles.action}>
              <Feather 
                  name="lock"
                  color={Colors.buttonred}
                  size={20}
              />
              <TextInput 
                  placeholder="Your Password"
                  placeholderTextColor="#666666"
                  secureTextEntry={data.secureTextEntry ? true : false}
                  style={[styles.textInput, {
                    color: Colors.buttonred
                  }]}
                  autoCapitalize="none"
                  onChangeText={(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity
                  onPress={updateSecureTextEntry}
              >
                  {data.secureTextEntry ? 
                  <Feather 
                      name="eye-off"
                      color="grey"
                      size={20}
                  />
                  :
                  <Feather 
                      name="eye"
                      color="grey"
                      size={20}
                  />
                  }
              </TouchableOpacity>
          </View>
          <Text style={[styles.text_footer, {
              color:  Colors.buttonred
,
              marginTop: 10
          }]}>Confirm Password</Text>
          <View style={styles.action}>
              <Feather 
                  name="lock"
                  color={Colors.buttonred}
                  size={20}
              />
              <TextInput 
                  placeholder="Confirm Your Password"
                  placeholderTextColor="#666666"
                  secureTextEntry={data.secureTextEntry ? true : false}
                  style={[styles.textInput, {
                    color: Colors.buttonred
                  }]}
                  autoCapitalize="none"
                  onChangeText={(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity
                  onPress={updateSecureTextEntry}
              >
                  {data.secureTextEntry ? 
                  <Feather 
                      name="eye-off"
                      color="grey"
                      size={20}
                  />
                  :
                  <Feather 
                      name="eye"
                      color="grey"
                      size={20}
                  />
                  }
              </TouchableOpacity>
          </View>   
          { data.isValidPassword ? null : 
          <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
          </Animatable.View>
          }
          

          <TouchableOpacity>
              <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={styles.button}>
              <TouchableOpacity
                  style={styles.signIn}
                  onPress={() => navigation.navigate('SplashScreen')}
              >
               <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
    
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.signIn}
                  onPress={() => navigation.navigate('Newone')}
              >
              <LinearGradient

          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={[styles.signIn, {
                      borderColor: '#009387',
                      borderWidth: 1,
                      marginTop: 15
                  }]}
              >
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
        </TouchableOpacity>

              <TouchableOpacity
                  onPress={() => navigation.navigate('SignUpScreen')}
                  style={[styles.signIn, {
                      borderColor: '#009387',
                      borderWidth: 1,
                      marginTop: 15
                  }]}
              >
                  <Text style={[styles.textSign, {
                      color: '#009387'
                  }]}>Sign In</Text>
              </TouchableOpacity>
          </View>
          
      </Animatable.View>
    </View>
  );
};

export default NewSignIn;
const {height} = Dimensions.get("screen");
 const height_logo = height * 0.28;
 const newLocal = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.bgmain
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
