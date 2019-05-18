/* @flow */

import React from 'react';
import { Text, View } from 'react-native';
import Moment from 'moment';
import WeatherTile, { styles } from './WeatherTile';
import type { DailyData } from './state/types';

type Props = { weatherData: DailyData };
const DailyTile = (props: Props) => {
  const { weatherData } = props;
  return (
    <WeatherTile>
      <View style={styles.textContainer}>
        <Text style={[styles.smallText, styles.allText]}>
          {Moment.unix(weatherData.time).format('dddd, MMMM Do')}
        </Text>
        <Text style={[styles.largeText, styles.allText]}>{weatherData.summary}</Text>
        <Text style={[styles.smallText, styles.allText]}>
          High:
          {`${weatherData.temperatureHigh}°`}
        </Text>
        <Text style={[styles.smallText, styles.allText]}>
          Low:
          {`${weatherData.temperatureLow}°`}
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
        <Text style={[styles.smallText, styles.allText]}>
          Precipitation chance:
          {' '}
          {weatherData.precipProbability * 100}
%
        </Text>
      </View>
    </WeatherTile>
  );
};

export default DailyTile;
