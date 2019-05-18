/* @flow */
import * as actions from './actions';
import type { AppState } from './types';
import type { Actions } from './actions';

const initState = {
  fetching: false,
  fetchingLocation: false,
  weatherData: {},
  locationData: {},
  error: '',
};

export default function reducer(state: AppState = initState, action: Actions) {
  switch (action.type) {
    case actions.GET_WEATHER:
      return { ...state, fetching: true, error: '' };
    case actions.GET_WEATHER_SUCCESS:
      return { ...state, fetching: false, weatherData: action.weatherData };
    case actions.GET_WEATHER_FAIL:
      return {
        ...state,
        fetching: false,
        error: 'Error fetching weather',
      };
    case actions.GET_LOCATION:
      return { ...state, fetchingLocation: true, error: '' };
    case actions.GET_LOCATION_SUCCESS:
      return { ...state, fetchingLocation: false, locationData: action.locationData };
    case actions.GET_LOCATION_FAIL:
      return {
        ...state,
        fetchingLocation: false,
        error: 'Error fetching location!!',
      };
    default:
      return state;
  }
}
