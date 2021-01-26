import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView} from 'react-native';

function HistoryScreen({ navigation }) {
  return (
    <ScrollView style = {styles.scrollContainer}>          
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Tarih Bilgi', {name: 'fransız'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Fransız İhtilali (1789) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Tarih Bilgi', {name: 'rönesans'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Rönesans </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Tarih Bilgi', {name: 'magna'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Magna Carta (1215) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Tarih Bilgi', {name: 'insan hakları'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> İnsan Hakları Evrensel Beyannamesi (1948) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Tarih Bilgi', {name: 'veba'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Kara Veba (1346 - 1353) </Text>
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

  export default HistoryScreen;