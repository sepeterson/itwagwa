/* @flow */
import { call, put, takeEvery } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import * as actions from './actions';
import apiKey from '../../apiKey.json';

const url = (latitude, longitude) => `https://api.darksky.net/forecast/${apiKey.darkSkyKey}/${latitude},${longitude}?exclude=minutely`;

function* getWeather(action) {
  try {
    const weatherData = yield fetch(
      url(action.locationData.latitude, action.locationData.longitude),
    ).then(response => response.json());
    yield put(actions.getWeatherSuccess(weatherData));
  } catch (e) {
    yield put(actions.getWeatherFail());
  }
}

const getUserLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(location => resolve(location), error => reject(error));
});

function* getLocation() {
  try {
    const location = yield call(getUserLocation);
    yield put(actions.getWeather(location.coords));
    yield put(actions.getLocationSuccess(location.coords));
  } catch (e) {
    yield put(actions.getLocationFail());
  }
}

function* weatherSaga(): Saga<void> {
  yield takeEvery(actions.GET_WEATHER, getWeather);
  yield takeEvery(actions.GET_LOCATION, getLocation);
}

export default weatherSaga;
