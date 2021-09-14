import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const MapScreen = (props) => {
  const mapRegion = {
    latitude: 12.56,
    longitude: 56.78,
    latitudeDelta: 0.089,
    longitudeDelta: 0.049
  };

  return <MapView region={mapRegion}></MapView>;
};

const styles = StyleSheet.create();

export default MapScreen;
