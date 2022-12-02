import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TextInput, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import { observer } from 'mobx-react-lite';

import TodoStore from './src/store/todo';

const App = observer(() => {
  const [text, setText] = useState('')

  const handleAdd = () => {
    TodoStore.createTodo({ id: uuid.v4(), title: text });
    setText('');
  }

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Create" onChangeText={t => setText(t)} defaultValue={text} />
        <Button title="Add Todo" onPress={handleAdd} />
        <ScrollView>
          {TodoStore.todos.map(({ id, title, completed }) => (
            <View key={id} style={styles.item}>
              <Text style={completed ? styles.completed : styles.uncompleted}>{title}</Text>
              {!completed && (
                <Button title="COMPLETE" onPress={() => TodoStore.completeTodo(id)} />
              )}
              <Button title="DELETE" onPress={() => TodoStore.deleteTodo(id)} />
            </View>
          ))}
        </ScrollView>
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  input: {
    width: 200,
    padding: 8,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 350,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  completed: {
    color: 'green',
    width: 120,
  },
  uncompleted: {
    color: 'red',
    width: 120,
  }
});


export default App