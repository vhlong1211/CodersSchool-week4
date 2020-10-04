import React, { useState } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// import {styles} from './App.js';
// console.log(styles);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    todoItem: {
      margin: 5,
      padding: 10,
      width: '95%',
      minHeight: 20,
      color: 'white',
      borderRadius: 5,
      flexWrap: 'wrap'
    },
    todoText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold'
    }
  });
export const TodoItem = props => {
    const statusStyle = {
      backgroundColor: props.todo.status === 'Done' ? 'blue' : 'green'
    };
    return (
      <TouchableOpacity
        key={props.todo.body}
        style={[styles.todoItem, statusStyle]}
      >
        <Text style={styles.todoText}>
          {props.idx + 1}: {props.todo.body}
        </Text>
      </TouchableOpacity>
    );
  };