import { useState } from 'react';
import { 
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import TodoLine from '../../components/TodoLine';

const TodoListScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    let newTodos = [...todos];
    newTodos.push({
      text,
      checked: false,
    });
    setTodos(newTodos);
    setText('');
  };

  const deleteTodo = (item) => {
    let newTodos = todos.filter((todo) => todo.text !== item.text);
    setTodos(newTodos);
  };

  const checkTodo = (item) => {
    let newTodos = todos.map((todo) => {
      if (todo.text === item.text) {
        return {
          text: item.text,
          checked: true,
        }
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const goToCompleted = () => {
    navigation.navigate('CompletedListScreen', {
      items: todos.filter((todo) => todo.checked)
    })
  }

  const keyExtractor = (index) => {
    return index.toString();
  };

  const changeText = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>NEW:</Text>
      <FlatList
        data={todos}
        style={styles.todoList}
        keyExtractor={(_, index) => keyExtractor(index)}
        renderItem={({ item }) =>
          <TodoLine
            item={item} 
            deleteTodo={deleteTodo} 
            checkTodo={checkTodo} />
        }
      />
      <Button title="HOME" onPress={() => navigation.goBack()} />
      <Button title="COMPLETED TASKS" onPress={goToCompleted} />
      <TextInput 
        style={styles.textInput} 
        onChangeText={changeText}
        value={text} 
      />
      <Button title="ADD" onPress={addTodo} />
    </View>
  );
}

export default TodoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  todoList: {
    display: 'flex',
    width: '100%',
    textAlign: 'left',
  },
  textInput: {
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    width: 250,
    height: 50,
    padding: 10,
  },
});