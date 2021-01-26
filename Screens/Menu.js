import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Image, Dimensions, ScrollView,} from 'react-native';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));

function MenuScreen({ navigation }) {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('Görsel Sanatlar')}>
                <Icon3 name="palette" size={50} color="black" />
                <Text> </Text>
                <Text style = {styles.ButtonText}> Görsel Sanatlar </Text>
            </TouchableOpacity>   

            <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('Müzik')}>
                <Icon name="music" size={50} color="black" />
                <Text> </Text>
                <Text style = {styles.ButtonText}> Müzik </Text>
            </TouchableOpacity>         

            <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('Edebiyat')}>
                <Icon3 name="feather-alt" size={50} color="black" />
                <Text> </Text>
                <Text style = {styles.ButtonText}> Edebiyat </Text>
            </TouchableOpacity>            

            <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('Tarih')}>
                <Icon3 name="monument" /*"fort-awesome"*/ size={50} color="black" />
                <Text> </Text>
                <Text style = {styles.ButtonText}> Tarih </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('Sinema')}>
                <Icon name="film" size={50} color="black" />
                <Text> </Text>
                <Text style = {styles.ButtonText}> Sinema </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxContainer} onPress={() => navigation.navigate('Bilim')}>
                <Icon2 name="rocket" size={50} color="black" />
                <Text> </Text>
                <Text style = {styles.ButtonText}> Bilim </Text>
            </TouchableOpacity>           
            
            
        </View>
        <View style={styles.sectionContainer}> 
        <Text> ads </Text>
        <Text style={styles.belowText}> İlerleyen zamanda daha fazla kategori görebilirsin! </Text>
        </View>        
       </ScrollView>       

    );
  }

  const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#0F0F0F',        
    },     
    
    ButtonText: {
        fontSize: 20,        
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'AppleSDGothicNeo-Bold'
    },
    
    belowText: {
        fontSize: 15, 
        color: 'white'
    },
    
    image: {
        width: 400,
        resizeMode: 'contain',
        height: 100
    },

    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#0F0F0F',        
    }, 

    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      },

    boxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBC631',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#EBC631'
    },
    
    artboxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#59BCF3',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#59BCF3'
    },

    musicboxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2BE367',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#2BE367'
    },

    litboxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE55B',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#EEE55B'
    },
    
    histboxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F36C59',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#F36C59'
    },

    cinboxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBC631',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#EBC631'
    },

    sciboxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBC631',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#EBC631'
    },  
    

  });  

  export default MenuScreen;