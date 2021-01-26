import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView} from 'react-native';

function ScienceScreen({ navigation }) {
  return (
    <ScrollView style = {styles.scrollContainer}>  
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Bilim Bilgi', {name: 'www'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> World Wide Web </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Bilim Bilgi', {name: 'covid'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> COVID-19 </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Bilim Bilgi', {name: 'görelilik'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Görelilik Teorisi </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Bilim Bilgi', {name: 'penisilin'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Penisilin </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Bilim Bilgi', {name: 'evren'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Evren </Text>
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

  export default ScienceScreen;