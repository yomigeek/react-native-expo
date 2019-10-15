import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const enteredGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
              <Button
              title="CANCEL"
              color="#e53935"
              onPress={props.onCancel}
              />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={enteredGoalHandler}
            /> 
          </View>   
        </View>
        
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%',
    color: '#e53935'
  }
});

export default GoalInput;
