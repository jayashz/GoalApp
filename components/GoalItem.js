import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = ({ text, onDelete, id }) => {
  return (
    
      <View style={styles.goalItem}>
        <Pressable android_ripple={{color:'#e8470d'}} onLongPress={onDelete.bind(this, id)} style={({pressed})=>pressed && styles.pressedItem} >
        <Text style={{ color: "white",padding:5,fontSize:18 }}>{text}</Text>
        </Pressable>
      </View>

  );
};

export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: "#cccccc",
    backgroundColor: "#982B1C",

  },
  pressedItem:{
    backgroundColor:'#800000',
  }
});
