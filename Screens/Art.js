import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';

function ArtScreen({ navigation }) {
    return (
      <ScrollView style = {styles.scrollContainer}>          
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Görsel Sanatlar Bilgi', {name: 'yıldız'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Yıldızlı Gece - Vincent Van Gogh (1889) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Görsel Sanatlar Bilgi', {name: 'david'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Davut (David) - Michelangelo (1504) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Görsel Sanatlar Bilgi', {name: 'afgan'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Afgan Kızı (Şarbat Gula) - Steve McCurry (1985) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Görsel Sanatlar Bilgi', {name: 'guernica'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Guernica - Pablo Picasso (1937) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Görsel Sanatlar Bilgi', {name: 'exp'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Dışavurumculuk (Ekspresyonizm) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Görsel Sanatlar Bilgi', {name: 'kübizm'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Kübizm </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Görsel Sanatlar Bilgi', {name: 'kaplumbağa'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Kaplumbağa Terbiyecisi - Osman Hamdi Bey (1906-1907) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Görsel Sanatlar Bilgi', {name: 'penseur'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Düşünen Adam - Auguste Rodin (1882, 1904) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Görsel Sanatlar Bilgi', {name: 'gerçek'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Gerçeküstücülük (Sürrealizm) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Görsel Sanatlar Bilgi', {name: 'emp'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> İzlenimcilik (Empresyonizm) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: '#0F0F0F',        
    },

    card: {
       marginVertical: 8,
       marginHorizontal: 8,
       backgroundColor: '#B0A9A1',
       borderRadius: 16,
       shadowOpacity: 0.2,
       shadowRadius: 4,
       shadowColor: 'black',
       shadowOffset: {
       height: 5,
       width: 5,
      },
  },
    
    ButtonText: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black'
    },

  });

  export default ArtScreen;