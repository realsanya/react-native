import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  Image,
  View,
  TextInput
} from 'react-native';

export default function App() {
  const [text, onChangeText] = useState('fefe');
  const [isShow, setIsShow] = useState(false);

  const onShowPress = () => {
    setIsShow(true);
  };

  const onHidePress = () => {
    setIsShow(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.rowContainer}>
          <Button
            style={styles.button}
            title="Показать текст"
            onPress={onShowPress}
          />
          <Button
            style={styles.button}
            onPress={onHidePress}
            title="Скрыть текст"
          />
        </View>
        {isShow && 
          <Text style={styles.text}>
            {text}
          </Text>
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    margin: 20,
    width: '100%',
    height: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  text: {
    fontSize: 42,
  },
  logo: {
    width: 50,
    height: 50,
  },
  button: {
    height: 50,
    maxWidth: 100,
  },
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
