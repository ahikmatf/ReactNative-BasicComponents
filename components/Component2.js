import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class Component2 extends Component {
  onPress() {
    console.log('pressed');
  }

  onPress2() {
    console.log('pressed 2');
  }

  render() {
    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>Component2</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this.onPress}
            underlayColor='black'
          >
            <View style={styles.v1}>
              <Text style={styles.lightText}>Sub1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity
            onPress={this.onPress2}
          >
            <View style={styles.v2}>
              <Text>Sub2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text>Sub3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'black'
  },
  myText: {
    color: 'red'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'tomato',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'cyan',
    padding: 10
  },
  lightText: {
    color: 'white'
  }
});

AppRegistry.registerComponent('Component2', () => Component2);
