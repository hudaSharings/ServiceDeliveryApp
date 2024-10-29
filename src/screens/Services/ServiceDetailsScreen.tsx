import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react'
import { FlatList, View } from 'react-native';
import { Text, Button, Card, IconButton } from 'react-native-paper';
import { RootStackParamList, Service } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type ServiceDetailsProps = NativeStackScreenProps<RootStackParamList, 'ServiceDetails'>;

interface Item {
  id: string;
  name: string;
  quantity: number;
  price: number;
}
const itemsList = [
  { id: '1', name: 'Item A', quantity: 1, price: 100 },
  { id: '2', name: 'Item B', quantity: 1, price: 50 },
];
const ServiceDetailsScreen = ({navigation}: ServiceDetailsProps) => {
  const [items, setItems] = useState<Item[]>(itemsList);
  const updateQuantity = (id:string, delta:number) => {
    setItems((prev) =>
      prev.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)
    );
  };
  const handleAddToCart = () => navigation.navigate('Cart', { cartItems: items });

  return (
    <View style={{ flex: 1, padding: 16 }}>
   <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 8 }}>
            <Card.Title title={item.name} subtitle={`Price: $${item.price}`} />
            <Card.Content>
              <Text>Quantity:</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <IconButton icon="minus" onPress={() => updateQuantity(item.id, -1)} />
                <Text>{item.quantity}</Text>
                <IconButton icon="plus" onPress={() => updateQuantity(item.id, 1)} />
              </View>
            </Card.Content>
          </Card>
        )}
      />
      <Button mode="contained" onPress={handleAddToCart}>
        <Text>Add to Cart</Text>
      </Button>
  </View>
  )
}

export default ServiceDetailsScreen