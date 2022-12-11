import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import CityCard from './src/screens/CityCard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home} />
        <Stack.Screen
          name="CityCard"
          component={CityCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

