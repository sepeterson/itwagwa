/* @flow */
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import Api from '...'
import * as actions from "./actions";
import apiKey from "../../apiKey.json";

const url = (latitude, longitude) =>
  `https://api.darksky.net/forecast/${
    apiKey.darkSkyKey
  }/${latitude},${longitude}?exclude=minutely`;

function* getWeather(action) {
  try {
    const response = yield fetch(
      url(action.locationData.latitude, action.locationData.longitude)
    ).then(response => response.json());
    yield put(actions.getWeatherSuccess(response));
  } catch (e) {
    yield put(actions.getWeatherFail());
  }
}

const getUserLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      location => resolve(location),
      error => reject(error)
    );
  });

function* getLocation(action) {
  try {
    const location = yield call(getUserLocation);
    yield put(actions.getWeather(location.coords));
    yield put(actions.getLocationSuccess(location.coords));
  } catch (e) {
    yield put(actions.getLocationFail());
  }
}

function* weatherSaga() {
  yield takeEvery(actions.GET_WEATHER, getWeather);
  yield takeEvery(actions.GET_LOCATION, getLocation);
}

export default weatherSaga;
