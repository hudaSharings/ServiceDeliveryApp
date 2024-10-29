import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type StackParamList = {
  Login: undefined;
  Home: undefined;
};

export type TabParamList = {
  Services: undefined;
  Orders: undefined;
};
export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Home: undefined;
  ServiceDetails: { service: Service };
  Cart: { cartItems: any };
  Payment: undefined;
  OrderTracking: undefined;
};
export type Service={
  id: number;
  name: string;
  description: string;
}

export type StackNavigationProp = NativeStackNavigationProp<StackParamList>;
export type TabNavigationProp = BottomTabNavigationProp<TabParamList>;
