/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import * as actions from "./state/actions";
import apiKey from '../apiKey.json';

type Props = { getWeather: () => void };
class MainScreen extends Component<Props> {
  getWeatherDataAsync = () => {
    return fetch(
      `https://api.darksky.net/forecast/${apiKey.darkSkyKey}/38.8933,-77.0800?lang=de`
    )
      .then(response => response.json())
      .then(responseJson => {
        // this.setState({ text: JSON.stringify(responseJson)});
        console.log(JSON.stringify(responseJson))
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>boy this sure is gonna be an app</Text>
        <Button title="get it dude" onPress={this.props.getWeather} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

const mapStateToProps = state => {
  //let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    //repos: storedRepositories
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
