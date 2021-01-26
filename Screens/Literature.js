import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView} from 'react-native';

function LiteratureScreen({ navigation }) {
  return (
    <ScrollView style = {styles.scrollContainer}>          
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Edebiyat Bilgi', {name: 'kafka'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Franz Kafka (1883 - 1924) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Edebiyat Bilgi', {name: 'dönüşüm'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Dönüşüm - Franz Kafka (1915) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Edebiyat Bilgi', {name: 'dava'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Dava - Franz Kafka (1925) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Edebiyat Bilgi', {name: 'shakespeare'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> William Shakespeare (1564 - 1616) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Edebiyat Bilgi', {name: 'macbeth'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Macbeth - Shakespeare (1606) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Edebiyat Bilgi', {name: 'komedya'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> İlahi Komedya - Dante (1472) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Edebiyat Bilgi', {name: 'tolkien'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> J.R.R Tolkien (1892 - 1973) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Edebiyat Bilgi', {name: 'asimov'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Isaac Asimov (1920 - 1992) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Edebiyat Bilgi', {name: 'camus'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Albert Camus (1913 - 1960) </Text>
        <Text> </Text>                 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Edebiyat Bilgi', {name: 'yeraltı'})}> 
        <Text> </Text>         
        <Text style = {styles.ButtonText}> Yeraltından Notlar (1864) </Text>
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

  export default LiteratureScreen;