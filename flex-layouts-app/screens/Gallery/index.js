import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const cat1 = require('../../assets/cat1.jpeg');
const cat2 = require('../../assets/cat2.jpeg');
const cat3 = require('../../assets/cat3.jpeg');
const cat4 = require('../../assets/cat4.jpeg');

const images = [cat1, cat2, cat3, cat4]

const Gallery = () => {
  return(
    <View style={styles.container}>
      {images.map(img => <Image style={styles.img} source={img} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    width: '33.3%',
    height: 100,
    borderColor: 'white',
    borderWidth: 2,
  }
});


export default Gallery;