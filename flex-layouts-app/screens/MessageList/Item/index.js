import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Item = ({ img, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={img} />
        <Text style={styles.text}> {text} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    marginTop: 12,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {
    height: 60,
    width: 60,
  },
  text: {
    fontSize: 14,
    color: 'blue',
    flex: 2,
    padding: 8,
  }
});


export default Item;