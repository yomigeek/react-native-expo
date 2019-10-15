import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Button, TextInput, ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalState, setModalState] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalTitle
      }
    ]);
    setModalState(false);
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    })
  }

  const modalStateUpdate = value => {
    setModalState(value);
  }

  const goalAddCancel = (value) => {
    setModalState(value);
  }

  return (
    <View style={styles.main}>
      <Button 
        color="#c2185b"
        title="Add New Goal" 
        onPress={modalStateUpdate.bind(this, true)}
      />
      <GoalInput
        visible={modalState}
        onAddGoal={addGoalHandler}
        onCancel={goalAddCancel.bind(this, false)}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={
          itemData =>
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
        }
      />
      {/* <ScrollView>
        {
          courseGoals.map(goal => (
            <View key={goal} style={styles.listItem}>
              <Text >
                {goal}
              </Text>
            </View>
          ))
        }
      </ScrollView> */}


      {/* <Text>{ outputText }</Text>
      <Button 
        title="Change Text" 
        onPress={() => setOutputText('Text Changed')} 
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50
  },
  addButton: {
    borderRadius: 15,
  }

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
