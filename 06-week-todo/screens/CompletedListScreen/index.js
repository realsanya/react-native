import {
  StyleSheet,
  View, 
  Text,
  FlatList,
  Button,
} from 'react-native';

const CompletedListScreen = ({ route, navigation }) => {
  const { items } = route.params;

  const keyExtractor = (index) => {
    return index.toString();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>COMPLETED:</Text>
      {items?.length ? (
        <FlatList
          data={items}
          style={styles.todoList}
          keyExtractor={(_, index) => keyExtractor(index)}
          renderItem={({ item }) =>
            <Text>{item.text}</Text>
          }
        />
      ) : <Text>Завершенных задач пока нет</Text>}
      <Button title="BACK" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CompletedListScreen;

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
});
