
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabs from './MainTabs';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import LoginScreen from '../screens/Auth/LoginScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={MainTabs} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="LogOut" component={LoginScreen} options={{ headerShown: false }}/>
  </Drawer.Navigator>
  )
}

export default DrawerNavigator