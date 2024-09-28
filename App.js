import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisibility,setModalVisibility]= useState(false);
  function addhandler(){
    setModalVisibility(true);
  };
  function hideModal(){
    setModalVisibility(false);
  }
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
      <Button title="Add Goal" color="#800000" onPress={addhandler}></Button>
      <GoalInput addGoal={addGoalHandler} hide={hideModal} visibility={modalVisibility} />
      
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
    backgroundColor:'#F2E8C6'
  },

  goalsContainer: {
    flex: 4,
  },
});
