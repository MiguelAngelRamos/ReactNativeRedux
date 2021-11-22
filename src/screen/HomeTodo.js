import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { completeAction } from '../actions/todoAction';

const HomeTodo = (props) => {
  console.log(props);
  const { data, complete } = props;
  return (
    <View style={styles.container}>
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
  complete: (id) => dispatch(completeAction(id))
});

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeTodo);

