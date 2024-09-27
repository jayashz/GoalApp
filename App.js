import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function inputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, key: (Math.random() * 100).toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Place your goal here"
          style={styles.textInput}
          onChangeText={inputHandler}
        ></TextInput>
        <Button title="Add Goal" color="red" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 70,
    paddingHorizontal: 30,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
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
  goalsContainer: {
    flex: 4,
  },
});
