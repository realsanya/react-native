import { makeAutoObservable } from 'mobx';
import axios from 'axios';

import { cities } from '../constants';

class WeatherStore {
  selectedCity = cities[0];
  currentTemperature = 'Не найдено';
  currentWindspeed = 'Не найдено'

  setSelectedCity = (city) => {
    this.selectedCity = city;
    this.getCurrentWeather();
  }

  setCurrentTemperature = (temperature) => {
    this.currentTemperature = temperature;
  }

  setCurrentWindspeed = (windspeed) => {
    this.currentWindspeed = windspeed;
  }

  getCurrentWeather = () => {
    this.setCurrentTemperature('Загрузка...');
    this.setCurrentWindspeed('Загрузка...');
    axios
      .get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: this.selectedCity.latitude,
          longitude: this.selectedCity.longitude,
          timezone: 'Europe/Moscow',
          current_weather: true,
        }
      })
      .then((response) => {
        this.setCurrentTemperature(response.data.current_weather.temperature);
        this.setCurrentWindspeed(response.data.current_weather.windspeed);
      });
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new WeatherStore();