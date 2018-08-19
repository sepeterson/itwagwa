/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import MainScreen from "./src/MainScreen";
import reducer from "./src/state/reducer";

const store = createStore(reducer, applyMiddleware(logger));

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
