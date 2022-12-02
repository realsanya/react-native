import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import UserList from './screens/UserList';
import MessageList from './screens/MessageList';
import UserProfile from './screens/UserProfile';
import UserCall from './screens/UserCall';
import Gallery from './screens/Gallery';
import ProductCard from './screens/ProductCard';
import Resume from './screens/Resume';
import AcceptedOrder from './screens/AcceptedOrder';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="MessageList" component={MessageList} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="UserCall" component={UserCall} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="ProductCard" component={ProductCard} />
          <Stack.Screen name="Resume" component={Resume} />
          <Stack.Screen name="AcceptedOrder" component={AcceptedOrder} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
