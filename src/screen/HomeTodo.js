import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { completeAction, submitAction } from '../actions/todoAction';
import InputTodo from '../components/InputTodo';

const HomeTodo = (props) => {
  // console.log(props);
  const [value, setValue] = useState('');
  // console.log(props);
  const { data, complete, submit } = props;

  const handleChange = (val) => {
    console.log(val);
    setValue(val);
  }
  const handleSubmit = () => {
    submit(value);
    setValue('');
  }
  return (
    <View style={styles.container}>
      <InputTodo 
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={value}
      />
     <FlatList 
      data={data}
      keyExtractor = { item => item.id.toString()}
      renderItem={ ({ item }) => (
        <ListItem 
          completed={ item.completed}
          desc={item.desc}
          onPress={ () => complete(item.id)}
        />
      )}
     />
    </View>
  )
}

const mapStateToProps = state => {
  // console.log(state.todos);
  return {
    data: state.todos
  };
}

const mapDispatchToProps = dispatch => ({
  complete: (id) => dispatch(completeAction(id)),
  submit: (val) => dispatch(submitAction(val))
});

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    justifyContent: 'flex-start'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeTodo);

