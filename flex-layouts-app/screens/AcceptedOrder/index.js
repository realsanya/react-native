import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const like = require('../../assets/like.png');

const AcceptedOrder = () => {
  return(
    <View style={styles.container}>
      <Image style={styles.like} source={like} />
      <Text style={styles.title}>Congratulation, your order is accepted</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'lightgray',
    paddingTop: 32,
    paddingHorizontal: 16,
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: '60%',
    padding: 12,
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
  },
  title: {
    fontSize: 20,
    color: '#222a46',
  },
  text: {
    color: 'gray',
    marginTop: 24,
    textAlign: 'center',
  },
  like: {
    height: 90,
    width:  90,
    marginVertical: 32,
  }
});


export default AcceptedOrder;