import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const TaskInput = props => {
  const [enteredTask,setEnteredTask]=useState('');

  const addTask=() => {
    props.onAddTask(enteredTask);
     setEnteredTask('');
  };

  const onChangeText= enteredText =>{
    setEnteredTask(enteredText);

  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <TextInput
       style={styles.input}
       placeholder="Enter Task"
       onChangeText={onChangeText}
       value={enteredTask}
       />
       <View style={styles.button}>
            <Button title="ADD" onPress={addTask} />
          </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  button:{
    width:'40%',
  },
  
});

export default TaskInput;