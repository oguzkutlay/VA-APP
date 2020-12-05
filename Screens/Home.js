import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CartTab from '../Tabs/Cart';
import CategoriesTab from '../Tabs/Categories';
import OrdersTab from '../Tabs/Orders';

import AccountDrawer from '../Drawers/Account';
import SettingsDrawer from '../Drawers/Settings';
import MainDrawer from '../Drawers/Main';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import { Ionicons } from '@expo/vector-icons'; 

function HomeDrawers() {
  return (
    <Drawer.Navigator screenOptions={({route}) => ({drawerIcon:({color,size}) => {
      let iconName
      if(route.name == 'Main Page') {
        iconName = 'ios-home'
      }
      else if(route.name == 'Account') {
        iconName = 'ios-contact'
      }
      else if(route.name == 'Settings') {
        iconName = 'ios-settings'
      }
      return <Ionicons name={iconName} size={size} color={color}/>
    }})}>
      <Drawer.Screen name="Main Page" component={MainDrawer}/>
      <Drawer.Screen name="Account" component={AccountDrawer}/>
      <Drawer.Screen name="Settings" component={SettingsDrawer}/>
    </Drawer.Navigator>
  );
}

function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({tabBarIcon:({color,size}) => {
      let iconName
      if(route.name == 'Home') {
        iconName = 'ios-home'
      }
      else if(route.name == 'Categories') {
        iconName = 'md-apps'
      }
      else if(route.name == 'Cart') {
        iconName = 'ios-cart'
      }
      else if(route.name == 'Orders') {
        iconName = 'ios-list'
      }
      return <Ionicons name={iconName} size={size} color={color}/>
    }})}>
      <Tab.Screen name="Home" component={HomeDrawers} options={{ title: 'Home' }}/>
      <Tab.Screen name="Categories" component={CategoriesTab} options={{ title: 'Categories' }}/>
      <Tab.Screen name="Cart" component={CartTab} options={{ title: 'Cart' }}/>
      <Tab.Screen name="Orders" component={OrdersTab} options={{ title: 'Orders' }}/>
    </Tab.Navigator> 
  );
}

export default HomeScreen;