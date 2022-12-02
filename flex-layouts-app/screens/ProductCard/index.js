import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

const tShirt = require('../../assets/t-shirt.jpeg');
const star = require('../../assets/star.png');

const sizes = ['S', 'M', 'L'];
const colors = ['blue', 'green', 'red', 'black', 'yellow'];

const ProductCard = () => {
  return(
    <ScrollView>
      <View style={styles.container}>
        <Image source={tShirt} style={styles.img} />
        <Text style={styles.title}> Super Soft T-shirt </Text>
        <Text style={styles.price}> 12.22$ </Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        <View style={styles.rating}>
          <Image style={styles.star} source={star} />
          <Image style={styles.star} source={star} />
          <Image style={styles.star} source={star} />
          <Image style={styles.star} source={star} />
          <Image style={styles.star} source={star} />
        </View>
        <View style={styles.variantsWrapper}>
          {colors.map(color => <View style={{ ...styles.color, backgroundColor: color }} />)}
        </View>
        <View style={styles.variantsWrapper}>
          {sizes.map(size => (
            <View style={styles.size}>
              <Text>{size}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  img: {
    height: 190,
    width: 164,
  },
  star: {
    height: 30,
    width: 30,
    marginLeft: 4,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 24,
    color: 'blue',
    fontSize: 28,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 8,
    color: 'red',
    fontSize: 24,
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
  },
  variantsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 24,
  },
  size: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 4,
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 18,
    fontSize: 20,
    marginLeft: 4,
  },
  color: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 4,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    marginTop: 24,
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
  }
});


export default ProductCard;