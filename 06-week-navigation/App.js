
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Главная</Text>
    <Button title="Список пользователей" onPress={() => navigation.navigate('UsersList')} />
    <Button title="О приложении" onPress={() => navigation.navigate('AboutApp')} />
  </View>
);

const UsersList = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Список пользователей</Text>
    <Button title="Главный экран" onPress={() => navigation.popToTop()} />
    <Button title="О приложении" onPress={() => navigation.navigate('AboutApp')} />
    <Button title="Профиль пользователя" onPress={() => navigation.navigate('UserProfile')} />
  </View>
);

const AboutApp = ({ navigation }) => (
  <View style={styles.container}>
    <Text>О приложении</Text>
    <Button title="Главный экран" onPress={() => navigation.goBack()} />
  </View>
);

const UserProfile = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Профиль пользователя</Text>
    <Button title="Главный экран" onPress={() => navigation.popToTop()} />
    <Button title="О приложении" onPress={() => navigation.navigate('AboutApp')} />
    <Button title="Список пользователей" onPress={() => navigation.navigate('UsersList')} />
  </View>
);

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UsersList" component={UsersList} />
        <Stack.Screen name="AboutApp" component={AboutApp} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

