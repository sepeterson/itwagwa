/* @flow */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'
import * as actions from './actions';
import apiKey from '../../apiKey.json';

const url = `https://api.darksky.net/forecast/${apiKey.darkSkyKey}/38.8933,-77.0800?exclude=minutely`;

function* getWeather(action) {
   try {
      const response = yield fetch(url)
        .then(response => response.json());
      yield put(actions.getWeatherSuccess(response));
   } catch (e) {
      yield put(actions.getWeatherFail());
   }
}

function* weatherSaga() {
  yield takeEvery(actions.GET_WEATHER, getWeather);
}

export default weatherSaga;
