import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const userIcon = require('../../assets/user.png');

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.icon} source={userIcon} />
        <Text style={styles.name}> Sasha Morozova </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    display: 'flex',
    height: 250,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginTop: 16,
    height: 128,
    width: 128,
    justifyContent: 'center',
    borderColor: 'white',
    borderRadius: 64,
    borderWidth: 4,
  },
  name: {
    color: 'white',
    marginTop: 16,
    fontWeight: '500',
    fontSize: 22,
  }
});


export default UserProfile;