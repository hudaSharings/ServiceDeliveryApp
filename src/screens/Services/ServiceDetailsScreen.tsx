import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { RootStackParamList, Service } from '../../types';

const ServiceDetailsScreen = () => {
const route = useRoute<RouteProp<RootStackParamList, 'ServiceDetails'>>();

const  {service}  = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
    <Card>
      <Card.Title title={service.name} />
      <Card.Content>
        <Text>{service.description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={() => alert('Order placed successfully!')}>
          <Text>Order Service</Text>
        </Button>
      </Card.Actions>
    </Card>
  </View>
  )
}

export default ServiceDetailsScreen