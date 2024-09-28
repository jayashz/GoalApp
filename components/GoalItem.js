import React from 'react'
import { StyleSheet,View,Text, Pressable } from 'react-native';
const GoalItem = ({text,onDelete,id}) => {
  
  return (
    <Pressable onLongPress={onDelete.bind(this,id)} style={{flex:1}}>
    <View style={styles.goalItem}>
          <Text style={{color:'white'}}>{text}</Text>
    </View>
    </Pressable>

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