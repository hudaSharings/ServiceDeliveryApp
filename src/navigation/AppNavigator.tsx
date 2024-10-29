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
import SplashScreen from "../screens/Splash/SplashScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();


const AppNavigator = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main"  screenOptions={{ headerShown: false }} >
           <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }}  />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={RegistrationScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={MainTabs} options={{ headerShown: false }}/>
            <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} options={{ headerShown: true }}/>
        </Stack.Navigator>    
     </NavigationContainer>
    </PaperProvider>
  )
}

export default AppNavigator
