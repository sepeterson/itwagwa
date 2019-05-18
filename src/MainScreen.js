/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, RefreshControl, SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import HourlyTile from './HourlyTile';
import DailyTile from './DailyTile';
import * as actions from './state/actions';
import * as selectors from './state/selectors';
import type { DailyData, CurrentlyData, HourlyData } from './state/types';

type Props = {
  getWeather: () => void,
  fetching: boolean,
  fetchingLocation: boolean,
  currentData?: CurrentlyData,
  dailyData?: DailyData[],
  hourlyData?: HourlyData[],
};

class MainScreen extends Component<Props> {
  static defaultProps = {
    currentData: undefined,
    dailyData: [],
    hourlyData: [],
  };

  renderContent() {
    const { currentData, dailyData, hourlyData } = this.props;
    if (!currentData || !dailyData || !hourlyData) {
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>Pull down to fetch weather data!</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <View style={styles.tileContainer}>
            <HourlyTile weatherData={currentData} />
          </View>
          {hourlyData.slice(1).map(item => (
            <View key={item.time} style={styles.tileContainer}>
              <HourlyTile weatherData={item} />
            </View>
          ))}
        </ScrollView>

        {dailyData.map(item => (
          <View key={item.time} style={styles.tileContainer}>
            <DailyTile weatherData={item} />
          </View>
        ))}
      </View>
    );
  }

  render() {
    const { fetchingLocation, fetching, getWeather } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.container}
          refreshControl={(
            <RefreshControl
              refreshing={fetchingLocation || fetching}
              onRefresh={getWeather}
              tintColor="white"
            />
)}
        >
          {this.renderContent()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#565c60',
  },
  noDataContainer: {
    alignItems: 'center',
    paddingTop: 32,
  },
  noDataText: {
    color: 'white',
  },
  tileContainer: {
    padding: 12,
    paddingBottom: 0,
  },
});

const mapStateToProps = state => ({
  fetching: selectors.getFetching(state),
  fetchingLocation: selectors.getFetchingLocation(state),
  currentData: selectors.getCurrentData(state),
  dailyData: selectors.getDailyData(state),
  hourlyData: selectors.getHourlyData(state),
});

const mapDispatchToProps = dispatch => ({
  getWeather: () => {
    dispatch(actions.getLocation());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
