/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/components/App';
import { View, AppRegistry, StyleSheet } from 'react-native';

class Project extends Component {
	render() {
		return (<App/>);
	}
}

AppRegistry.registerComponent('Project', () => Project);
