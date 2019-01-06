/**
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl
} from "react-native";
import WeatherTile from "./WeatherTile";
import { connect } from "react-redux";
import * as actions from "./state/actions";
import * as selectors from "./state/selectors";
import apiKey from "../apiKey.json";
import type { HourlyData } from "./state/types";

type Props = {
  getWeather: () => void,
  fetching: boolean,
  currentData?: HourlyData,
  dailyData?: any
};
class MainScreen extends Component<Props> {
  renderNoData() {
    if (!this.props.currentData) {
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            Pull down to fetch weather data!
          </Text>
        </View>
      );
    }
  }

  renderContent() {
    if (!this.props.currentData) {
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            Pull down to fetch weather data!
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.tileContainer}>
          <WeatherTile weatherData={this.props.currentData} />
        </View>
        {this.props.dailyData.map((item, i) => (
          <View key={i} style={styles.tileContainer}>
            <WeatherTile weatherData={item} />
          </View>
        ))}
      </View>
    );
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.props.fetching}
            onRefresh={this.props.getWeather}
          />
        }
      >
        {this.renderContent()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#565c60"
  },
  noDataContainer: {
    alignItems: "center",
    paddingTop: 32
  },
  noDataText: {
    color: "white"
  },
  tileContainer: {
    padding: 12,
    paddingBottom: 0
  }
});

const mapStateToProps = state => {
  return {
    fetching: selectors.getFetching(state),
    currentData: selectors.getCurrentData(state),
    dailyData: selectors.getDailyData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeather: id => {
      dispatch(actions.getLocation());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
