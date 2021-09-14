import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import Colors from "../constants/Colors";

const MapScreen = (props) => {
  const [savedCoordinates, setSavedCoordinates] = useState();

  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const selectLocationHandler = (event) => {
    setSavedCoordinates({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!savedCoordinates) {
      return;
    }
    props.navigation.navigate("NewPlace", { pickedLocation: savedCoordinates });
  }, [savedCoordinates]);

  useEffect(() => {
    props.navigation.setParams({
      saveMarkedLocation: savePickedLocationHandler
    });
  }, [savePickedLocationHandler]);

  let markedCoordinates;
  if (savedCoordinates) {
    markedCoordinates = {
      latitude: savedCoordinates.lat,
      longitude: savedCoordinates.lng
    };
  }

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {savedCoordinates && (
        <Marker title="Marked Location" coordinate={markedCoordinates} />
      )}
    </MapView>
  );
};

MapScreen.navigationOptions = (navData) => {
  const btnSave = navData.navigation.getParam("saveMarkedLocation");

  return {
    headerRight: () => {
      return (
        <TouchableOpacity style={styles.headerButton} onPress={btnSave}>
          <Text style={styles.headerText}>Save</Text>
        </TouchableOpacity>
      );
    }
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  headerButton: {
    marginHorizontal: 5
  },
  headerText: {
    fontSize: 16,
    color: Platform.OS === "android" ? "white" : Colors.primary
  }
});

export default MapScreen;
