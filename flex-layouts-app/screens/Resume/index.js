import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const userImg = require('../../assets/user.png')

const Resume = () => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> Lorem ipsum dolor </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        <Text style={styles.link}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
        <Text style={styles.date}>2001-12-12 13:03:02 </Text>
        <View style={styles.user}>
          <Image style={styles.img} source={userImg} />
          <Text style={styles.name}> Sasha Morozova</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Like
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    height: 128,
    backgroundColor: 'lightblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
  },
  text: {
    marginTop: 12,
  },
  content: {
    padding: 24,
  },
  link: {
    color: 'blue',
    fontWeight: '500',
    marginTop: 12,
  },
  date: {
    color: 'gray',
    fontWeight: '500',
    marginTop: 12,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 12,
    marginTop: 24,
    backgroundColor: 'blue',
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
  },
  img: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: 'lightblue',
  },
  user: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: 'blue',
    fontWeight: '700',
    marginLeft: 16,
    fontSize: 22,
  }
});


export default Resume;