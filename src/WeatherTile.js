/* @flow */

import React, { Component } from "react";
import { StyleSheet, Text, View, RefreshControl } from "react-native";
import Moment from "moment";
import type { HourlyData } from "./state/types";

type Props = { weatherData: HourlyData };
export default class WeatherTile extends Component<Props> {
  render() {
    const data = this.props.weatherData;
    if (data.temperatureHigh) {
      return (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={[styles.smallText, styles.allText]}>
              {Moment.unix(data.time).format("dddd, MMMM Do")}
            </Text>
            <Text style={[styles.largeText, styles.allText]}>
              {data.summary}
            </Text>
            <Text style={[styles.smallText, styles.allText]}>
              High: {`${data.temperatureHigh}°`}
            </Text>
            <Text style={[styles.smallText, styles.allText]}>
              Low: {`${data.temperatureLow}°`}
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
            <Text style={[styles.smallText, styles.allText]}>
              Precipitation chance: {data.precipProbability * 100}%
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.smallText, styles.allText]}>
            Now, {Moment.unix(data.time).format("MMMM Do, h:mm a")}
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
    backgroundColor: "#F5FCFF",
    borderRadius: 12,
  },
  largeText: {
    fontSize: 22,
  },
  smallText: {
    fontSize: 12,
  },
  allText: {
    color: "black",
  },
  textContainer: {
    padding: 8,
  }
});
