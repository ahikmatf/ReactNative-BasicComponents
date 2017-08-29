import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Component5 from './components/Component5';

export default class App extends Component {
  render() {
    return (
      <View>
        <Component5 />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('App', () => App);
