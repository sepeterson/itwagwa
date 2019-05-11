/* @flow */

export const getFetching = (state) => state.fetching;

export const getFetchingLocation = (state) => state.fetchingLocation;

export const getCurrentData = (state) => state.weatherData ? state.weatherData.currently : undefined;

export const getDailyData = (state) => {
  return state.weatherData.daily ? state.weatherData.daily.data : undefined;
};
