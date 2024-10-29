import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import MainTabs from './MainTabs';
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import ServiceDetailsScreen from "../screens/Services/ServiceDetailsScreen";
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();


const AppNavigator = () => {
  return (
    
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={LoginScreen}  />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={MainTabs}/>
            <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen}/>
        </Stack.Navigator>    
  )
}

export default AppNavigator
