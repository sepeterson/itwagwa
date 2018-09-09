/* @flow */
import * as actions from './actions';

const initState = {
  fetching: false,
  weatherData: {},
  error: '',
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_WEATHER:
      return { ...state, fetching: true, error: '', };
    case actions.GET_WEATHER_SUCCESS:
      return { ...state, fetching: false, weatherData: action.weatherData };
    case actions.GET_WEATHERS_FAIL:
      return {
        ...state,
        fetching: false,
        error: "Error fetching weather"
      };
    default:
      return state;
  }
}
