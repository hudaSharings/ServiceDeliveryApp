import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { loadServicesData } from '../../utils/loadData';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProp,Service,StackNavigationProp, RootStackParamList } from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const ServiceListScreen = () => {

const [services, setServices] = useState<Service[]>([]);
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();


  useEffect(() => {   
    const fetchData = async () => {
      const data = await loadServicesData();
      setServices(data);
    };
    fetchData();
  }, []);

  return (
     (services.length > 0) &&
    <FlatList
     data={services}
     keyExtractor={(item) => item.id.toString()}
     contentContainerStyle={{padding:16}}
     renderItem={({item}) => (
      <Card style={{ marginBottom: 10 }}>
            <Card.Title title={item.name} />
            <Card.Content>
            <Text>{item.description}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('ServiceDetails', {service: item})}>
               <Text> View Details</Text>
              </Button>
            </Card.Actions>
       </Card>
     )}
    />
  )
}

export default ServiceListScreen