import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; 

import MenuScreen from './Menu';
import AboutScreen from './About';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator lazy = {true} tabBarOptions={{      
        style: {
              backgroundColor: '#E2881C',
              paddingBottom: 3
        },
        labelStyle: {
          color: 'black',          
        },
   }} screenOptions={({route}) => ({tabBarIcon:({tintcolor,color,size}) => {
      let iconName
      if(route.name == 'Kategoriler') {
        iconName = 'ios-apps'
      }
      else if(route.name == 'Hakkında') {
        iconName = "ios-help"
      }      
      return <Ionicons name={iconName} size={size} color={'black'} tintcolor= {'black'}/>
    }})}>
      <Tab.Screen name="Kategoriler" component={MenuScreen} /> 
      <Tab.Screen name="Hakkında" component={AboutScreen} />           
    </Tab.Navigator> 
  );
}

export default HomeScreen;