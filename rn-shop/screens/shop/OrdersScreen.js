import React, {useState, useEffect, useCallback} from "react";
import { FlatList, Text, Platform } from "react-native";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";
import { CustomHeaderButtons, Item } from "../../components/UI/HeaderButton";
import * as orderActions from "../../store/actions/orders";

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderActions.fetchOrders());
  }, [dispatch])

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.amount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
    headerLeft: () => (
      <CustomHeaderButtons>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </CustomHeaderButtons>
    )
  };
};

export default OrdersScreen;
