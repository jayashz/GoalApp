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
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  function addGoalHandler(enteredGoal) {
    if (enteredGoal.trim().length > 0) {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { text: enteredGoal, key: Math.floor(Math.random() * 100).toString() },
      ]);
    }
  }
  function deleteGoalHandler(id) {

    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id)
    });
    
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDelete={deleteGoalHandler}
              />
            );
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

  goalsContainer: {
    flex: 4,
  },
});
