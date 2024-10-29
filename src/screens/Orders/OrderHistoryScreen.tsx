import React from 'react'
import { FlatList, View } from 'react-native';
import { List } from 'react-native-paper';


const orders = [
  { id: '1', service: 'Electrician', date: '2023-10-27', status: 'Completed' },
  { id: '2', service: 'Transport', date: '2023-10-28', status: 'In Progress' },
];

const OrderHistoryScreen = () => {
  return (
   <FlatList 
   data={orders}
   keyExtractor={item => item.id}
   contentContainerStyle={{ padding: 16 }} 
   renderItem={({ item }) => (
   <List.Item 
      title={item.service} 
      description={`Date: ${item.date} | Status: ${item.status}`}
      left={()=><List.Icon  icon="history"/>}
      style={{ marginBottom: 16 }}        
    />
    )}
   />
  )
}

export default OrderHistoryScreen