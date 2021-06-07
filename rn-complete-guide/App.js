import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

import { StyleSheet, Button, View, FlatList } from "react-native";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalAddHandler = (goalTitle) => {
    setGoals((currGoals) => [
      ...currGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const goalDeleteHandler = (goalId) => {
    setGoals((currGoals) => {
      return currGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visibleModal={isAddMode}
        onAdd={goalAddHandler}
        onModal={() => setIsAddMode(false)}
      />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={goalDeleteHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
