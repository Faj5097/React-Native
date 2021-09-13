import React from "react";
import { View, FlatList, Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <PlaceItem
            image={null}
            title={itemData.item.title}
            address={null}
            onSelect={() => {
              props.navigation.navigate("PlaceDetail", {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id
              });
            }}
          />
        );
      }}
    />
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add Place"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => {
              navData.navigation.navigate("NewPlace");
            }}
          />
        </HeaderButtons>
      );
    }
  };
};

const styles = StyleSheet.create();

export default PlacesListScreen;