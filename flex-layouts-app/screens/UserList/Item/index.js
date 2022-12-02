import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const phone = require('../../../assets/phone.png');
const video = require('../../../assets/video.png');

const Item = ({ img, date, name, type }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={img} />
        <View style={styles.text}>
          <Text style={styles.name}> {name} </Text>
          <Text style={styles.date}> {date} </Text>
        </View>
      </View>
      {type === 'phone' && <Image style={styles.icon} source={phone} />}
      {type === 'video' && <Image style={styles.icon} source={video} />}
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
    paddingVertical: 16,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
    paddingRight: 24,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    padding: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  date: {
    fontSize: 14,
    fontColor: 'gray',
  },
  img: {
    height: 60,
    width: 60,
  },
  icon: {
    height: 28,
    width: 28,
  },
});


export default Item;