import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class Counter {
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }

  reset() {
    this.count = 0
  }
}

const counter = new Counter()

const App = observer(() => (
  <View style={styles.container}>
    <Text>{counter.count}</Text>
    <Button onPress={() => counter.increment()} title="+" />
    <Button onPress={() => counter.decrement()} title="-" />
    <Button onPress={() => counter.reset()} title="Reset" />
  </View>
))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
