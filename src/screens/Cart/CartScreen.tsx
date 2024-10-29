import React from 'react'
import { View, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Card, Text, Button } from 'react-native-paper';

type CartProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

const CartScreen = ({ route, navigation }: CartProps) => {
  const { cartItems } = route.params;
  const calculateTotal = () => cartItems.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);

  return (
    <View style={{ padding: 16 }}>
    <FlatList
      data={cartItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={{ marginVertical: 8 }}>
          <Card.Title title={item.name} subtitle={`Quantity: ${item.quantity}`} />
          <Card.Content>
            <Text>Price: ${item.price}</Text>
          </Card.Content>
        </Card>
      )}
    />
    <Text>Total: ${calculateTotal()}</Text>
    <Button mode="contained" onPress={() => navigation.navigate('Payment')}>
      <Text> Proceed to Payment</Text>
      </Button>
  </View>
  )
}

export default CartScreen