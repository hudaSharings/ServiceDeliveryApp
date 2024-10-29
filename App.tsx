import React, { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './src/screens/Splash/SplashScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegistrationScreen from './src/screens/Auth/RegistrationScreen';
import ServiceListScreen from './src/screens/Services/ServiceListScreen';
import ServiceDetailsScreen from './src/screens/Services/ServiceDetailsScreen';
import OrderTrackingScreen from './src/screens/Orders/OrderTrackingScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';

import AppNavigator from './src/navigation/AppNavigator';

export default function App() {  
  return ( 
    <PaperProvider>
      <NavigationContainer>
    <AppNavigator />
    </NavigationContainer>
    </PaperProvider>
  )
}


