import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';

function CinemaScreen({ navigation }) {
    return (
      <ScrollView style = {styles.scrollContainer}>          
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sinema Bilgi', {name: 'bladerunner'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Blade Runner (Bıçak Sırtı) - 1982 </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sinema Bilgi', {name: 'yedi'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Se7en (Yedi) - 1995 </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sinema Bilgi', {name: 'baba'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> The Godfather (Baba) - 1972 </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sinema Bilgi', {name: 'iyikotu'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> The Good, The Bad and The Ugly (İyi, Kötü ve Çirkin) - 1966 </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sinema Bilgi', {name: 'koh'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Kingdom of Heaven (Cennetin Krallığı) - 2005 </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sinema Bilgi', {name: 'lalaland'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> La La Land (Aşıklar Şehri) - 2016 </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sinema Bilgi', {name: 'shaw'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> The Shawshank Redemption (Esaretin Bedeli) - 1994 </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sinema Bilgi', {name: 'shining'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> The Shining (Cinnet) - 1980 </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sinema Bilgi', {name: 'taxi'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Taxi Driver (Taksi Şoförü) - 1976 </Text>
          <Text> </Text>                 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sinema Bilgi', {name: 'lost'})}> 
          <Text> </Text>         
          <Text style = {styles.ButtonText}> Lost in Translation (Bir Konuşabilse) - 2003 </Text>
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

  export default CinemaScreen;