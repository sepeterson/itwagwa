/* @flow */

import React, { Component } from "react";
import { StyleSheet, Text, View, RefreshControl } from "react-native";
import Moment from "moment";
import type { HourlyData } from "./state/types";

type Props = { weatherData: HourlyData };
export default class WeatherTile extends Component<Props> {
  render() {
    const data = this.props.weatherData;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.smallText, styles.allText]}>
            {Moment().format("MMMM Do, h:mm a")}
          </Text>
          <Text style={[styles.largeText, styles.allText]}>{data.summary}</Text>
          <Text style={[styles.largeText, styles.allText]}>{`${
            data.temperature
          }°`}</Text>
          <Text style={[styles.smallText, styles.allText]}>
            Feels like: {data.apparentTemperature}°
          </Text>
          <Text style={[styles.smallText, styles.allText]}>
            Dew point: {data.dewPoint}°
          </Text>
          <Text style={[styles.smallText, styles.allText]}>
            Humidity: {data.humidity * 100}%
          </Text>
          <Text style={[styles.smallText, styles.allText]}>
            Wind speed: {data.windSpeed} mph
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF"
  },
  largeText: {
    fontSize: 22
  },
  smallText: {
    fontSize: 12
  },
  allText: {
    color: "black"
  },
  textContainer: {
    padding: 8
  }
});
