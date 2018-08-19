/* @flow */
import * as actions from './actions';

export default function reducer(state = { repos: [] }, action) {
  switch (action.type) {
    case actions.GET_WEATHER:
      return { ...state, loading: true };
    case actions.GET_WEATHER_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case actions.GET_WEATHERS_FAIL:
      return {
        ...state,
        loading: false,
        error: "Error while fetching repositories"
      };
    default:
      return state;
  }
}
