import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: "white"
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackOptions
  }
);

const FavsNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackOptions
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Favorites: {
      screen: FavsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor
    }
  }
);

export default createAppContainer(MealsFavTabNavigator);
