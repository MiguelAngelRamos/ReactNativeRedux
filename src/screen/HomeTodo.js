import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const HomeTodo = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
     <FlatList 
      data={data}
      keyExtractor = { item => item.id.toString()}
      renderItem={ ({ item }) => (
        <ListItem 
          completed={ item.completed}
          desc={item.desc}
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
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});

export default connect(mapStateToProps)(HomeTodo);

