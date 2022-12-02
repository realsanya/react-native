import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const user = require('../../assets/user2.png');
const phone = require('../../assets/phone.png');
const video = require('../../assets/video.png');
const rejected = require('../../assets/rejected.png');

const UserCall = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}> Sasha Morozova </Text>
        <Text style={styles.status}> calling </Text>
      </View>
      <Image style={styles.avatar} source={user} />
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <View style={styles.imgWrapper}>
            <Image source={video} style={styles.button} />
          </View>
          <View style={styles.imgWrapper}>
            <Image source={rejected} style={styles.button} />
          </View>
          <View style={styles.imgWrapper}>
            <Image source={phone} style={styles.button} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'green',
  },
  header: {
    height: 100,
    paddingTop: 32,
    paddingHorizontal: 12,
  },
  avatar: {
    height: 256,
    width: '100%',
  },
  name: {
    color: 'white',
    fontWeight: '400',
    fontSize: 28,
  },
  status: {
    textTransform: 'uppercase',
    color: 'white',
    marginLeft: 2,
    opacity: 0.75,
  },
  buttonContainer: {
    display: 'flex',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    height: 30,
    width: 30,
  },
  imgWrapper: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 26,
  },
});


export default UserCall;