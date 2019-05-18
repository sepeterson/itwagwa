/* @flow */

import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = { children: any };
const WeatherTile = (props: Props) => {
  const { children } = props;
  return <View style={styles.container}>{children}</View>;
};

export default WeatherTile;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    borderRadius: 12,
  },
  largeText: {
    fontSize: 22,
  },
  smallText: {
    fontSize: 12,
  },
  allText: {
    color: 'black',
  },
  textContainer: {
    padding: 8,
  },
});
