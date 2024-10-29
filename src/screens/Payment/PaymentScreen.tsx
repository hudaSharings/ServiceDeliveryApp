import React from 'react'
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Button } from 'react-native-paper';

type PaymentProps = NativeStackScreenProps<RootStackParamList, 'Payment'>;
const PaymentScreen = ({ navigation }: PaymentProps) => {

    const handlePayment = () => {
        // Placeholder for payment processing logic
        navigation.navigate('OrderTracking');
      };

  return (
    <View style={{ padding: 16, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Confirm your payment to complete the order.</Text>
    <Button mode="contained" onPress={handlePayment}>
        <Text>Confirm Payment</Text>
    </Button>
  </View>
  )
}

export default PaymentScreen