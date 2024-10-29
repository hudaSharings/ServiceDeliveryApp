import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type OrderTrackingProps = NativeStackScreenProps<RootStackParamList, 'OrderTracking'>;


export default function OrderTrackingScreen(props: OrderTrackingProps) {
  const [currentLocation, setCurrentLocation] = useState({ latitude: 37.7749, longitude: -122.4194 });
  const [destination, setDestination] = useState({ latitude: 37.7849, longitude: -122.4094 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((prevLocation) => ({
        latitude: prevLocation.latitude + 0.0001,
        longitude: prevLocation.longitude + 0.0001,
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={currentLocation} title="Your Location" />
        <Marker coordinate={destination} title="Destination" />
        <Polyline coordinates={[currentLocation, destination]} strokeColor="#6200ee" strokeWidth={3} />
      </MapView>
    </View>
  );
}
