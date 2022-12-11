import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native';

import WeatherStore from '../../store/WeatherStore';
import { cities } from '../../constants';

const Home = ({ navigation }) => {

  const [selectedCity, setSelectedCity] = useState({});

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cityWrapper}
      onPress={() => setSelectedCity(item)}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  const checkWeather = () => {
    WeatherStore.setSelectedCity(selectedCity);
    navigation.navigate('CityCard');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{selectedCity.name || 'Выберите город'}</Text>
      <FlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity onPress={checkWeather} style={styles.button}>
        <Text style={styles.buttonText}>
          Посмотреть погоду
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 24,
    color: 'gray',
    fontWeight: 'bold',
  },
  cityWrapper: {
    backgroundColor: 'lightgray',
    width: 700,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
  },
  name: {
    fontSize: 17,
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'blue',
    marginBottom: 40,
  },
  buttonText: {
    padding: 22,
    fontSize: 17,
    color: 'white'
  }
});