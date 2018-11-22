/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, RefreshControl } from "react-native";
import { connect } from "react-redux";
import * as actions from "./state/actions";
import * as selectors from "./state/selectors";
import apiKey from "../apiKey.json";

type Props = { getWeather: () => void, fetching: boolean };
class MainScreen extends Component<Props> {

  render() {
    return (
      <ScrollView style={styles.container} refreshControl={
          <RefreshControl
            refreshing={this.props.fetching}
            onRefresh={this.props.getWeather}
          />
        }>
        <Text>WEATHER!! DATA!!! GOES!!!! HERE!!!!!</Text>
        {this.props.fetching && <Text>FETCHING!!!!</Text>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});

const mapStateToProps = state => {
  return {
    fetching: selectors.getFetching(state)
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
