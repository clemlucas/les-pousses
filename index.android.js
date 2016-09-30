/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import LaunchScreen from './src/components/LaunchScreen.js';
import {
	AppRegistry
} from 'react-native';

class Project extends Component {
	render() {
		return (
			<LaunchScreen/>
		);
	}
}

AppRegistry.registerComponent('Project', () => Project);
