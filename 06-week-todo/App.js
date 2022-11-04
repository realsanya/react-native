import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import TodoListScreen from './screens/TodoListScreen';
import CompletedListScreen from './screens/CompletedListScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TodoListScreen" component={TodoListScreen} />
        <Stack.Screen name="CompletedListScreen" component={CompletedListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};