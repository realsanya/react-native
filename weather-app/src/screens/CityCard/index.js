import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,  } from 'react-native';
import { observer } from 'mobx-react-lite';

import WeatherStore from '../../store/WeatherStore';

const MainScreen = observer(() => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Text style={styles.cityText}>{WeatherStore.selectedCity.name}</Text>
        </View>
        <View>
          <Text style={styles.text}>{WeatherStore.currentTemperature} °C</Text>
          <Text style={styles.text}>{WeatherStore.currentWindspeed} ༄</Text>
        </View>
      </SafeAreaView>
    </View>
  );
});

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  cityText: {
    fontWeight: 'bold',
    fontSize: 40,
    textTransform: 'uppercase',
  },
});