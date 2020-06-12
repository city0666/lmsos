
  
import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Button,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/color';
import MainButton from '../components/MainButton';
import SocialButton from '../components/SocialButton';
// import Swiper from 'react-native-swiper';



const SplashScreen = ({ navigation }) =>{
    
        


    return (

  <View style={styles.container}>
          <StatusBar backgroundColor= '#404E5A'
 barStyle="light-content"/>
          <View style={styles.header}>

            <Animatable.Image 
                 animation ='pulse' easing="ease-out" iterationCount="infinite" 
                duraton="5000"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="center"

            />
             {/* <Swiper style={styles.wrapper} showsButtons loop={false}>
    <View testID="Hello" style={styles.slide1}>
      <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View testID="Beautiful" style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View testID="Simple" style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
  </Swiper> */}
        </View>
        <Animatable.View 
            style={[styles.footer, {
                opacity: .8
            }]}
             animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: 'white'
            }]}>Stay connected with everyone!</Text>
            
            <View style={styles.button}>
            <MainButton  onPress={() => navigation.navigate('SignInScreen')} >Sign In</MainButton>
            <MainButton  onPress={() => navigation.navigate('SignUpScreen')} >Sign Up</MainButton>


            </View>
            <Text style={{marginTop:25, color:'white'}}>
            By joining you agree to ours Terms of Service and Privacy Policy
            </Text>
        </Animatable.View>

        
      </View>
 
 
    
 
 );
        }
 export default SplashScreen;
 
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
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#05375a',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingVertical: 50,
      paddingHorizontal: 30,
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'black',
      marginTop:5,
      alignItems: 'center',
      fontSize:30


  },
  button: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 25
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
