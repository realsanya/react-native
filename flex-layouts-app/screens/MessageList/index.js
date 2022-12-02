import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Item from './Item';

const userImg = require('../../assets/user.png');

const data = [
  {
    text: 'Scan the QR code above with Expo Go (Android) or the Camera app (iOS)',
    img: userImg,
  },
  {
    text: 'Scan the QR code above with Expo Go (Android) or the Camera app (iOS)',
    img: userImg,
  },
  {
    text: 'Scan the QR code above with Expo Go (Android) or the Camera app (iOS)',
    img: userImg,
  },
  {
    text: 'Scan the QR code above with Expo Go (Android) or the Camera app (iOS)',
    img: userImg,
  }
]


const MessageList = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <ScrollView>
        {data.map((message, i) => (
          <Item 
            key={i}
            text={message.text}
            img={message.img} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});


export default MessageList;