/**
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, RefreshControl } from "react-native";
import WeatherTile from './WeatherTile';
import { connect } from "react-redux";
import * as actions from "./state/actions";
import * as selectors from "./state/selectors";
import apiKey from "../apiKey.json";
import type { HourlyData } from "./state/types";

type Props = { getWeather: () => void, fetching: boolean, currentData?: HourlyData, };
class MainScreen extends Component<Props> {

  render() {
    return (
      <ScrollView style={styles.container} refreshControl={
          <RefreshControl
            refreshing={this.props.fetching}
            onRefresh={this.props.getWeather}
          />
        }>
        {this.props.currentData && <WeatherTile weatherData={this.props.currentData} />}
        {this.props.fetching && <Text>FETCHING!!!!</Text>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#565c60"
  }
});

const mapStateToProps = state => {
  return {
    fetching: selectors.getFetching(state),
    currentData: selectors.getCurrentData(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeather: id => {
      dispatch(actions.getWeather());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
