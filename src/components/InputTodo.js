import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const InputTodo = ({ onChange, onSubmit, value }) => {
  return (
   <TextInput
      onSubmitEditing={onSubmit} 
      onChangeText={onChange}
      value={value}
      style={styles.input}
   />
  )
}

export default InputTodo

const styles = StyleSheet.create({
  input: {
    borderColor: '#777',
    borderBottomWidth: 2,
    // width: 300,
    height: 40,
    marginBottom: 10
  }
})
