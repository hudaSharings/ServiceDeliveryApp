import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ServiceListScreen from '../screens/Services/ServiceListScreen';
import OrderHistoryScreen from '../screens/Orders/OrderHistoryScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Services' component={ServiceListScreen}  />
        <Tab.Screen name='Orders' component={OrderHistoryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default MainTabs