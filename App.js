import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from './Screens/Main';
import MenuScreen from './Screens/Menu';
import ArtScreen from './Screens/Art';
import HistoryScreen from './Screens/History';
import LiteratureScreen from './Screens/Literature';
import MusicScreen from './Screens/Music';
import CinemaScreen from './Screens/Cinema';
import ScienceScreen from './Screens/Science';
import CineInfoScreen from './Screens/CineInfo';
import ArtInfoScreen from './Screens/ArtInfo';
import MusicInfoScreen from './Screens/MusicInfo';
import LitInfoScreen from './Screens/LitInfo';
import HistInfoScreen from './Screens/HistInfo';
import SciInfoScreen from './Screens/SciInfo';
import AboutScreen from './Screens/About';
import HomeScreen from './Screens/Home';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>      
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: /*'#EFAE10'*/ '#E2881C'}, headerTintColor: '#000000', headerTitleStyle: {fontWeight: 'bold'}}}>
      <Stack.Screen options={{headerShown: false}} name="Açılış" component={MainScreen}/>
      <Stack.Screen options={{headerLeft: null}} name="Kategoriler" component={MenuScreen}/>
      <Stack.Screen name="Görsel Sanatlar" component={ArtScreen}/>
      <Stack.Screen name="Tarih" component={HistoryScreen}/>
      <Stack.Screen name="Edebiyat" component={LiteratureScreen}/> 
      <Stack.Screen name="Müzik" component={MusicScreen}/>
      <Stack.Screen name="Sinema" component={CinemaScreen}/>
      <Stack.Screen name="Bilim" component={ScienceScreen}/> 
      <Stack.Screen name="Sinema Bilgi" component={CineInfoScreen}/> 
      <Stack.Screen name="Görsel Sanatlar Bilgi" component={ArtInfoScreen}/>
      <Stack.Screen name="Müzik Bilgi" component={MusicInfoScreen}/>
      <Stack.Screen name="Edebiyat Bilgi" component={LitInfoScreen}/> 
      <Stack.Screen name="Tarih Bilgi" component={HistInfoScreen}/>
      <Stack.Screen name="Bilim Bilgi" component={SciInfoScreen}/>
      <Stack.Screen options={{headerLeft: null}} name="Hakkında" component={AboutScreen}/>
      <Stack.Screen options={{headerLeft: null}} name="Cepte Bilgi" component={HomeScreen}/>   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
