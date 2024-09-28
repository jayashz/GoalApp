import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import { StyleSheet } from "react-native";

const GoalInput = ({ inpHandler, addGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  function inputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    addGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Place your goal here"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredGoal}
        ></TextInput>
        <Button title="Add Goal" color="red" onPress={addGoalHandler}></Button>
      </View>

  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBlockColor: "#cccccc",
    marginBottom: 15,
    color: "white",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    borderRadius: 5,
    width: "70%",
    marginRight: 3,
  },
});
