import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './Screens/Home';
import SignScreen from './Screens/Sign';
import LoginScreen from './Screens/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#f4511e'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Home' }, 
            {gestureEnabled: false}, 
            {headerBackTitleVisible: false}
          }
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}  
          options={{ 
            title: 'Login' }, 
            {gestureEnabled: false}
          }
        />
        <Stack.Screen 
          name="Sign Up" 
          component={SignScreen} 
          options={{ 
            title: 'Sign Up' }, 
            {gestureEnabled: false}
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
