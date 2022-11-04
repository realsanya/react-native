import {
  View, 
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Главная</Text>
    <Button title="Список задач" onPress={() => navigation.navigate('TodoListScreen')} />
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});