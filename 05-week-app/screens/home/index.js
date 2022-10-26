import { View, Button, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to Button" onPress={() => navigation.navigate('ButtonScreen')} />
      <Button title="Go to TextInput" onPress={() => navigation.navigate('TextInputScreen')} />
      <Button title="Go to Custom Components" onPress={() => navigation.navigate('CustomComponentsScreen')} />
  </View>
  );
};

export default HomeScreen;