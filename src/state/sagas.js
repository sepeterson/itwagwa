/* @flow */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'
import * as actions from './actions';

function* getWeather(action) {
  console.log("getting the weather here!");
   /*try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }*/
}

function* weatherSaga() {
  yield takeEvery(actions.GET_WEATHER, getWeather);
}

export default weatherSaga;
