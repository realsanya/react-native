import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonScreen from './screens/button';
import HomeScreen from './screens/home';
import TextInputScreen from './screens/textInput';
import CustomComponentsScreen from './screens/customComponents';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="CustomComponentsScreen" component={CustomComponentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
