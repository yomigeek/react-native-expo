import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
 
const GoalItem = props => {
  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text style={styles.listText}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#388e3c',
    borderColor: '#388e3c',
    borderWidth: 1,
  },
  listText: {
    color: '#fff',
  }

});

export default GoalItem;
