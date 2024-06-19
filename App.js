// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingPage from './LoadingPage/LoadingPage';
import Login from './LoginPage/Login';
import HomePage from './HomePage/HomePage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homepage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
