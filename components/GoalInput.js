import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";
import { StyleSheet } from "react-native";

const GoalInput = ({ addGoal, visibility, hide }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  function inputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    addGoal(enteredGoal);
    setEnteredGoal("");
    hide();
  }

  return (
    <Modal
      visible={visibility}
      animationType="slide"
      style={{ backgroundColor: "red" }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Place your goal here"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredGoal}
          placeholderTextColor='#3C3D37'
        ></TextInput>
        <View style={styles.buttonGrp}>
          <Button
            title="Add Goal"
            color="#800000"
            onPress={addGoalHandler}
          ></Button>
          <Button title="X" color="#800000" onPress={hide}></Button>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "#F2E8C6",
  },
  textInput: {
    borderWidth: 1,
    borderColor:'#3C3D37',
    padding: 12,
    borderRadius: 5,
    width: "70%",
    backgroundColor:'#DAD4B5'
  },
  buttonGrp: {
    marginTop: 10,
    gap: 3,
  },
});
