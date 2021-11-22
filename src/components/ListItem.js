import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ListItem = ({ desc, completed }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {
        completed? <Text style={[styles.text, styles.strike]}>{ desc }</Text>: <Text style={styles.text}>{desc} </Text>
      }
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  text: {
    fontSize: 20
  },
  strike: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  }
})
