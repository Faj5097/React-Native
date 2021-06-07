import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAdd(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visibleModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="COURSE GOALS"
          style={styles.inputTextField}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.inputButtons}>
          <View style={styles.btn}>
            <Button title="CANCEL" color="red" onPress={props.onModal} />
          </View>
          <View style={styles.btn}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputButtons: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputTextField: {
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: "80%"
  },
  btn: {
    width: "40%"
  }
});

export default GoalInput;
