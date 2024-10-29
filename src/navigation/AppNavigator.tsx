import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Provider as PaperProvider } from 'react-native-paper';
import { RootStackParamList } from '../types';
import MainTabs from './MainTabs';
import DrawerNavigator from "./DrawerNavigator";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import LoginScreen from '../screens/Auth/LoginScreen';
import ServiceListScreen from '../screens/Services/ServiceListScreen';
import ServiceDetailsScreen from '../screens/Services/ServiceDetailsScreen';
import CartScreen from '../screens/Cart/CartScreen';
import PaymentScreen from '../screens/Payment/PaymentScreen';
import OrderTrackingScreen from '../screens/Orders/OrderTrackingScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import OrdersScreen from '../screens/Orders/OrdersScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();


const AppNavigator = () => {
  return (
   
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Main" component={DrawerNavigator}  />
            <Stack.Screen name="Login" component={LoginScreen}  />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={MainTabs}/>
            <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen}/>
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} />
        </Stack.Navigator>    
     
  )
}

export default AppNavigator
