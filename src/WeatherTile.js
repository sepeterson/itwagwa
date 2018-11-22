/* @flow */

import React, { Component } from "react";
import { StyleSheet, Text, View, RefreshControl } from "react-native";
import type { HourlyData } from "./state/types";

type Props = { weatherData: HourlyData };
export default class WeatherTile extends Component<Props> {

  render() {
    const data = this.props.weatherData;
    return (
      <View style={styles.container} >
        <Text>time: {data.time}</Text>
        <Text>{data.summary}</Text>
        <Text>{`${data.temperature}\u0176`}</Text>
        <Text>Feels like: {data.apparentTemperature}</Text>
        <Text>Dew point: {data.dewPoint}</Text>
        <Text>Humidity: {data.humidity*100}%</Text>
        <Text>Wind speed: {data.windSpeed} mph</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
