import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function LoginScreen({ navigation }) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "position" : "height"} style={styles.container}>
        <View style={styles.container}>
            <Image 
                style={styles.Image}
                source={require('../Images/shopcart.png')}
            />
            <Input 
                label='Please enter your E-mail'
                placeholder='E-mail'
                leftIcon={
                    <Icon
                        name='envelope'
                        size={24}
                        color='black'
                    />
                }
                keyboardType='email-address'
            />
            <Input
                label='Please enter your password'
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Image: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
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