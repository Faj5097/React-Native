import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

import Colors from "../../constants/Colors";

const CustomHeaderButton = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? 'white' : Colors.primary}
    {...props}
  />
);

export const CustomHeaderButtons = (props) => {
  return <HeaderButtons HeaderButtonComponent={CustomHeaderButton} {...props} />;
};
export { Item } from 'react-navigation-header-buttons';