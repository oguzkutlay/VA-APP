import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image 
            style={styles.Image}
            source={require('../Images/shopcart.png')}
        />
        <TextInput 
            style={styles.InputBox}
            placeholder='E-mail'
            keyboardType='email-address'
        />
        <TextInput
            style={styles.InputBox}
            placeholder='Password'
            secureTextEntry={true}
        />
        <TouchableOpacity style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.SignUpButtonText}>
            <Text> Don't have an account yet? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                <Text style={styles.SignUpButton}> Sign Up </Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.SignUpButtonText}> or </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.SignUpButton}> Continue without login </Text>
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

    LoginButton: {
        width: 400,
        backgroundColor: 'grey',
        borderRadius: 25,
        paddingVertical: 18,
        marginVertical: 10
    },
    
    LoginButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    SignUpButton: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    SignUpButtonText: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 5
    }
  });

export default LoginScreen;