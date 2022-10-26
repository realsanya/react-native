import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ButtonScreen = () => {
  const [pressedCount, setPressedCount] = useState(0);
  const [isClear, setIsClear] = useState(false);

  const incCountHandler = () => {
    setPressedCount(pressedCount + 1);
  }

  const clearHandler = () => {
    setIsClear(true);
  }

  const isDisabled = pressedCount >= 3 && !isClear;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {pressedCount > 0 
        ? `The button was pressed ${pressedCount} times!` 
        : 'the button isn\'t pressed yet'}
      </Text>
      <View style={styles.buttonsView}>
        <Button
          title="Press me"
          disabled={isDisabled}
          onPress={incCountHandler}
        />
        <Button
          title="Remove disabled"
          onPress={clearHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ADD8E6',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ButtonScreen;