import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CartTab from '../Tabs/Cart';
import CategoriesTab from '../Tabs/Categories';
import OrdersTab from '../Tabs/Orders';

import AccountDrawer from '../Drawers/Account';
import SettingsDrawer from '../Drawers/Settings';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Account" component={AccountDrawer}/>
      <Drawer.Screen name="Settings" component={SettingsDrawer}/>
    </Drawer.Navigator>
  );
}

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeDrawers} />
      <Tab.Screen name="Categories" component={CategoriesTab} />
      <Tab.Screen name="Cart" component={CartTab} />
      <Tab.Screen name="Orders" component={OrdersTab} />
    </Tab.Navigator> 
  );
}

export default HomeScreen;