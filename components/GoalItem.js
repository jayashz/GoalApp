import React from 'react'
import { StyleSheet,View,Text } from 'react-native';
const GoalItem = (props) => {

  return (
    <View style={styles.goalItem}>
          <Text style={{color:'white'}}>{props.text}</Text>
    </View>
  )
}

export default GoalItem;
const styles = StyleSheet.create({
    goalItem:{
        width:'100%',
        padding:5,
        borderWidth:1,
        borderRadius:5,
        marginBottom:10,
        borderColor:'#cccccc',
        backgroundColor:'#E85C0D',
      }
})