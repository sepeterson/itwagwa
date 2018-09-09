/* @flow */

export const GET_WEATHER = 'weather/GET_WEATHER';

export const GET_WEATHER_SUCCESS = 'weather/GET_WEATHER_SUCCESS';

export const GET_WEATHERS_FAIL = 'weather/GET_WEATHERS_FAIL';

export const getWeather = () => ({
  type: GET_WEATHER,
});

export const getWeatherSuccess = (weatherData) => ({
  type: GET_WEATHER_SUCCESS, weatherData
});

export const getWeatherFail = () => ({
  type: GET_WEATHERS_FAIL,
});
