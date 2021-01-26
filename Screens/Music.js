import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView} from 'react-native';

function MusicScreen({ navigation }) {
    return (
      <ScrollView style = {styles.scrollContainer}>          
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Müzik Bilgi', {name: 'wall'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> The Wall - Pink Floyd (1979) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Müzik Bilgi', {name: 'saray'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Die Entführung aus dem Serail - Mozart (1782) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Müzik Bilgi', {name: 'caz'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Caz </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Müzik Bilgi', {name: 'beatles'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> The Beatles (1960 - 1970) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Müzik Bilgi', {name: 'blues'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Blues </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Müzik Bilgi', {name: 'carmen'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Carmen - Georges Bizet (1875) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Müzik Bilgi', {name: 'freddie'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Freddie Mercury (1946 - 1991) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Müzik Bilgi', {name: 'mozart'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Wolfgang Amadeus Mozart (1756 - 1791) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Müzik Bilgi', {name: 'messiah'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Messiah (1742) </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Müzik Bilgi', {name: 'mj'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Michael Jackson (1958 - 2009) </Text>
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

  export default MusicScreen;