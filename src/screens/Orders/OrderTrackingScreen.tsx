import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Text } from 'react-native-paper';

export default function OrderTrackingScreen() {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const destination = { latitude: 37.78845, longitude: -122.4356 };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((prev) => ({
        latitude: prev.latitude + 0.0001,
        longitude: prev.longitude + 0.0001,
      }));
    }, 2000);
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
