/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, RefreshControl, SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import WeatherTile from './WeatherTile';
import * as actions from './state/actions';
import * as selectors from './state/selectors';
import type { HourlyData } from './state/types';

type Props = {
  getWeather: () => void,
  fetching: boolean,
  fetchingLocation: boolean,
  currentData?: HourlyData,
  dailyData?: HourlyData[],
};

class MainScreen extends Component<Props> {
  static defaultProps = {
    currentData: {},
    dailyData: [],
  };

  renderContent() {
    const { currentData, dailyData } = this.props;
    if (!currentData) {
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>Pull down to fetch weather data!</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.tileContainer}>
          <WeatherTile weatherData={currentData} />
        </View>
        {dailyData.map((item, i) => (
          <View key={i} style={styles.tileContainer}>
            <WeatherTile weatherData={item} />
          </View>
        ))}
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.container}
          refreshControl={(
            <RefreshControl
              refreshing={this.props.fetchingLocation || this.props.fetching}
              onRefresh={this.props.getWeather}
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
