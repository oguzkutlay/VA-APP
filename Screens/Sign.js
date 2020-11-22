import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image } from 'react-native';

function SignScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Image 
            style={styles.Image}
            source={require('../Images/shopcart.png')}
        />
        <TextInput 
            style={styles.InputBox}
            placeholder='Please enter an E-mail address'
            keyboardType='email-address'
        />
        <TextInput
            style={styles.InputBox}
            placeholder='Please enter a password'
            secureTextEntry={true}
        />
        <TextInput
            style={styles.InputBox}
            placeholder='Please retype your password'
            secureTextEntry={true}
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

  InputBox: {
      width: 400,
      borderRadius: 25,
      paddingVertical: 15,
      marginVertical: 10,
      backgroundColor: '#f0ffff',
      textAlign: 'center'
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

