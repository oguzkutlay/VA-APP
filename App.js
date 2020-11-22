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
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerStyle: {backgroundColor: '#f4511e'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }, {headerLeft: null}} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Sign Up" component={SignScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
