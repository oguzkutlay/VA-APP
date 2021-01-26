import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, Dimensions, ScrollView,} from 'react-native';

function AboutScreen({ navigation }) {
    return (
      <ScrollView style={styles.scrollContainer}>  
        <View style={styles.card}>  
            <Text></Text>    
            <Text style={styles.InfoText}> Günümüzün dünyasında bilgiye ulaşmak artık o kadar hızlı bir süreç ki, günlük hayatımızda edindiğimiz bilgilerin
            bize bir şeyler katıp katmadığını anlamamız bile zorlaşıyor.{"\n"}
            {"\n"}
            Bu uygulamanın amacı da her gün bilgi bombardımanına tutulduğumuz ve günlük, genelgeçer bilgilere maruz kaldığımız 
            bu dünyada belki de zamanla popüler bilgilerin sahneyi alması ile gölgede kalmış bilgileri kullanıcılar ile buluşturmak.{"\n"}
            {"\n"}
            Bu uygulamada karşılaşacağın bilgilerin büyük bir kısmı günümüzden uzak yıllar önceye ait şeyler içeriyor olabilir, bunun sebebi bu bilgilerin
            hatırlanmaya değer olması olabilir.
            {"\n"}
            {"\n"}
            Belki de bu uygulamadaki bilgilerin çoğunu biliyor olacaksın, ama bilmediğin tek bir şey ile bile karşılaşsan, bu bir kazanım değil midir?
            Belki de gelecek hobin, ilgi alanın, kariyerin o bilginin ardında olabilir.
            {"\n"}
            {"\n"}
            Bir çok farklı kategoride bilmeye değer bilgilerin olduğu bu uygulama kültürü cebine getiriyor, bu uygulama ile kendini geliştirebilmek, 
            kendine yeni kapılar açmak, buradaki bilgilerin üzerine daha fazla araştırma yapmak da senin elinde!
            {"\n"}            
            
            </Text> 
            <Text></Text>                      
        
        </View>
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

    thumb: {
        height: 500,
        width: 300,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },

    card: {
       marginVertical: 8,
       marginHorizontal: 8,
       backgroundColor: 'gray',
       borderRadius: 16,
       shadowOpacity: 0.2,
       shadowRadius: 4,
       shadowColor: 'black',
       shadowOffset: {
       height: 5,
       width: 5,
      },
  },
    
    TitleText: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'gray'
    },

    InfoText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'justify',
        color: 'black',
        marginHorizontal:4,
      },

  });

  export default AboutScreen;