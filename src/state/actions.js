/* @flow */
import type { LocationData, WeatherData } from './types';

export const GET_WEATHER = 'weather/GET_WEATHER';
export const GET_WEATHER_SUCCESS = 'weather/GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAIL = 'weather/GET_WEATHERS_FAIL';
export const GET_LOCATION = 'weather/GET_LOCATION';
export const GET_LOCATION_SUCCESS = 'weather/GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAIL = 'weather/GET_LOCATION_FAIL';

export type Actions =
  | { type: typeof GET_WEATHER, locationData: LocationData }
  | { type: typeof GET_WEATHER_SUCCESS, weatherData: WeatherData }
  | { type: typeof GET_WEATHER_FAIL }
  | { type: typeof GET_LOCATION }
  | { type: typeof GET_LOCATION_SUCCESS, locationData: LocationData }
  | { type: typeof GET_LOCATION_FAIL };

export const getWeather = (locationData: LocationData) => ({
  type: GET_WEATHER,
  locationData,
});

export const getWeatherSuccess = (weatherData: WeatherData) => ({
  type: GET_WEATHER_SUCCESS,
  weatherData,
});

export const getWeatherFail = () => ({
  type: GET_WEATHER_FAIL,
});

export const getLocation = () => ({
  type: GET_LOCATION,
});

export const getLocationSuccess = (locationData: LocationData) => ({
  type: GET_LOCATION_SUCCESS,
  locationData,
});

export const getLocationFail = () => ({
  type: GET_LOCATION_FAIL,
});
