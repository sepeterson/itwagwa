/* @flow */
import type { AppState } from './types';

export const getFetching = (state: AppState) => state.fetching;

export const getFetchingLocation = (state: AppState) => state.fetchingLocation;

export const getCurrentData = (state: AppState) => (state.weatherData.currently ? state.weatherData.currently : undefined);

export const getDailyData = (state: AppState) => (state.weatherData.daily && state.weatherData.daily.data
  ? state.weatherData.daily.data
  : undefined);

export const getHourlyData = (state: AppState) => (state.weatherData.hourly && state.weatherData.hourly.data
  ? state.weatherData.hourly.data
  : undefined);
