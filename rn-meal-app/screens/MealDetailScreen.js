import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const meal = MEALS.find((mealItem) => mealItem.id == mealId);

  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;
