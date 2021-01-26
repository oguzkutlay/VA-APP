import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image} from 'react-native';

function MainScreen({ navigation }) {
    return (
      <View onTouchStart = {() => navigation.navigate('Cepte Bilgi')} style={styles.container}> 
        <Image 
        style={styles.Image} 
        source={require('../Images/ceptelogoson.png')} > 
        </Image>            
        <View style={styles.bottomView}>
          <Text style={styles.ButtonText}> Herhangi bir yere dokun </Text>
        </View>            
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#0F0F0F',
        justifyContent: 'center',
        alignItems: 'center',             
        
    }, 

    Image: {
      width: 160,
      height: 160,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    ButtonText: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center'
    }, 

    bottomView: {
      width: '100%',
      height: 50,     
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
      bottom: 0, 
    },
    
  });  

  export default MainScreen;