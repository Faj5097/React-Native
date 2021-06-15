import React from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const displayedMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return <MealList data={displayedMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "FAVORITES"
  };
};

export default FavoritesScreen;
