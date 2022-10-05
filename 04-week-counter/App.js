import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <View style={styles.flowRow}>
        <Pressable style={styles.button} onPress={() => setCounter(counter - 1)}>
          <Text style={styles.text}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setCounter(counter + 1)}>
          <Text style={styles.text}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 64,
    fontWeight: '500',
  },
  flowRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: 'black',
    margin: 10,
  },
  text: {
    alignItems: 'center',
    color: 'white',
    fontWeight: '700',
  }
});