/* @flow */

import React from 'react';
import { Text, View } from 'react-native';
import Moment from 'moment';
import WeatherTile, { styles } from './WeatherTile';
import type { CurrentlyData, HourlyData } from './state/types';

type Props = { weatherData: CurrentlyData | HourlyData };
const HourlyTile = (props: Props) => {
  const { weatherData } = props;
  return (
    <WeatherTile>
      <View style={styles.textContainer}>
        <Text style={[styles.largeText, styles.allText]}>
          {Moment.unix(weatherData.time).format('MMMM Do, h:mm a')}
        </Text>
        <Text style={[styles.largeText, styles.allText]}>{weatherData.summary}</Text>
        <Text style={[styles.largeText, styles.allText]}>{`${weatherData.temperature}°`}</Text>
        <Text style={[styles.smallText, styles.allText]}>
          Feels like:
          {' '}
          {weatherData.apparentTemperature}
°
        </Text>
        <Text style={[styles.smallText, styles.allText]}>
          Dew point:
          {weatherData.dewPoint}
°
        </Text>
        <Text style={[styles.smallText, styles.allText]}>
          Humidity:
          {weatherData.humidity * 100}
%
        </Text>
        <Text style={[styles.smallText, styles.allText]}>
          Wind speed:
          {weatherData.windSpeed}
          {' '}
mph
        </Text>
      </View>
    </WeatherTile>
  );
};

export default HourlyTile;
