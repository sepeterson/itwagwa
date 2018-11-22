/* @flow */

export const getFetching = (state) => state.fetching;

export const getCurrentData = (state) => state.weatherData ? state.weatherData.currently : undefined;
