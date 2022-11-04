import { 
  View, 
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

const TodoLine = ({ item, deleteTodo, checkTodo }) => {
  const handleDelete = () => {
    deleteTodo(item);
  };

  const handleCheck = () => {
    checkTodo(item);
  }

  return (
    <View style={styles.todoLine}>
      <TouchableOpacity 
        style={styles.todoLineTouch}
        onPress={handleCheck}
      >
        <Text style={{ color: item.checked ? 'green' : 'red' }}>{item.text}</Text>
      </TouchableOpacity>
      <Button title="DEL" onPress={handleDelete} />
    </View> 
  );
};

const styles = StyleSheet.create({
  todoLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    height: 40,
  },
  todoLineTouch: {

  },
});

export default TodoLine;