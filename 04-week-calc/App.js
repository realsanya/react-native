import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [resultText, setResultText] = useState('');
  const [calculationText, setCalculationText] = useState('');
  const [operations, setOperations] = useState(['DEL','+','-','x','/']);

  const calculateResult = () => {
    const text = resultText
    //TODO: remove eval
    setCalculationText( eval(text));
  }

  const validate = () => {
    const text = resultText;
    switch(text.slice(-1)) {
      case '+':
      case '-':
      case 'x':
      case '/':
      return false;
    }
    return true;
  }
  
  const buttonPressed = (text) => {
    if (text === '=') {
      return validate() &&  calculateResult()
    }
    setResultText(resultText + text);
  }

  const operate = (operation) => {
    switch(operation) {
      case 'DEL':
        let text = resultText.split('')
        text.pop()
        setResultText(text.join(''));  
        break
      case '+':
      case '-':
      case 'x':
      case '/':
        const lastChar = resultText.split('').pop()

        if (operations.indexOf(lastChar) > 0) return;

        if (resultText === "") {
          return;
        }
        setResultText(resultText + operation);
    }
  }

  const getNumbers = () => {
    let rows =[];
    let nums =[[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    
    for(let i = 0; i < 4; i++) {
      let row =[];
      for(let j = 0; j < 3; j++){
        row.push(
          <TouchableOpacity key={nums[i][j]} style={styles.button}>
            <Text onPress={() => buttonPressed(nums[i][j])} style={styles.buttonText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(<View key ={i} style={styles.row}>{row}</View>);
    }

    return rows;
  }

  const getOperations = () => {
    let ops = [];
    for(let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity key={operations[i]} style={styles.button} onPress={() => operate(operations[i])}>
          <Text style={[styles.buttonText, styles.white]}>{operations[i]}</Text>
        </TouchableOpacity>
      );
    } 

    return ops;
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calculationText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          {getNumbers()}
        </View>
        <View style={styles.operations}>
          {getOperations()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 30,
  },
  white: {
    color: 'white'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  calculationText: {
    fontSize: 24,
    color: 'black',        
  },
  resultText: {
    fontSize: 30,
    color: 'black',
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: '#4ba0f4',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'orange'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#b8babc'
  }
});