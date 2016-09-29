/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import LoginScreen from './components/LoginScreen.js';
import { View, AppRegistry, StyleSheet } from 'react-native';

class Project extends Component {
  render() {
    return (<LoginScreen/>);
  }
}

AppRegistry.registerComponent('Project', () => Project);