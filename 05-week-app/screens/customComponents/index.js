import { useState } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, TextInput } from 'react-native';

const Box = ({ width, height, color }) => {
  return <View style={{ width, height, backgroundColor: color, margin: 10 }} />;
}

const CustomComponentsScreen = () => {
  const [boxes, setBox] = useState([{
    width: 100,
    height: 100,
    color: 'red',
  }]);

  const [size, setSize] = useState(10);
  const [text, setText] = useState('10');
  const [color, setColor] = useState('green');

  const addSquard = () => {
    setBox([...boxes, {
      width: size,
      height: size,
      color,
    }])
  };

  const clearData = () => {
    setBox([]);
  };

  const handleSizeChange = (newValue) => {
    setText(newValue);
    if (newValue.match(/\d+/g) && Number(newValue) < 320 && Number(newValue) > 0) {
      setSize(Number(newValue));
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {boxes.map((box, idx) => (
          <Box key={idx} color={box.color} width={box.width} height={box.height}/>
        ))}
      </ScrollView>
      <View style={styles.buttonsView}>
        <Text>Размер:</Text>
        <TextInput
          value={text}
          style={styles.textInput}
          onChangeText={handleSizeChange}
        />
      </View>
      <View style={styles.buttonsView}>
        <View style={{ ...styles.colorButton, backgroundColor: 'red' }}>
          <Button
            title=""
            onPress={() => setColor('red')}
          />
        </View>
        <View style={{ ...styles.colorButton, backgroundColor: 'green' }}>
          <Button
            title=""
            onPress={() => setColor('green')}
          />
        </View>
        <View style={{ ...styles.colorButton, backgroundColor: 'blue' }}>
          <Button
            title=""
            onPress={() => setColor('blue')}
          />
        </View>
      </View>
      <View style={styles.buttonsView}>
        <Button title="Добавить квадрат" onPress={addSquard}/>
        <Button title="Очистить" onPress={clearData}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'end',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ADD8E6',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  colorButton: {
    width: 60,
    height: 30,
    margin: 5, 
    borderRadius: 8,
  },
  textInput: {
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    padding: 10,
    margin: 10,
    minWidth: 50,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  }
});

export default CustomComponentsScreen;