import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function SignScreen({ navigation }) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "position" : "height"} style={styles.container}>
      <View style={styles.container}>
        <Image 
            style={styles.Image}
            source={require('../Images/shopcart.png')}
        />
        <Input 
            label='Please enter your E-mail adress'
            placeholder='E-mail'
            keyboardType='email-address'
            leftIcon={
                <Icon
                    name='envelope'
                    size={24}
                    color='black'
                />
            }
        />
        <Input
            label='Please enter a password'
            placeholder='Password'
            secureTextEntry={true}
            leftIcon={
                <Icon
                    name='lock'
                    size={32}
                    color='black'
                />
            }
        />
        <Input
            label='Please retype your password'
            placeholder='Password'
            secureTextEntry={true}
            leftIcon={
                <Icon
                    name='lock'
                    size={32}
                    color='black'
                />
            }
        />
        <TouchableOpacity style={styles.SignButton}>
            <Text style={styles.SignButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.LoginButtonText}>
            <Text> Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.LoginButton}> Login </Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.LoginButtonText}> or </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.LoginButton}> Continue without login </Text>
        </TouchableOpacity>
     </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },

  Image: {
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center'
  },

  SignButton: {
      width: 400,
      backgroundColor: 'grey',
      borderRadius: 25,
      paddingVertical: 18,
      marginVertical: 10
  },
  
  SignButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
  },

  LoginButton: {
      fontSize: 16,
      fontWeight: 'bold'
  },

  LoginButtonText: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'row',
      marginVertical: 5
  }
});

export default SignScreen;

