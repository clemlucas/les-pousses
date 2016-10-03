import React, { Component, } from 'react';
import { View, StatusBar } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import SubscribeScreen from './SubscribeScreen';
import TestsScreen from './tests/TestsScreen';
import TestResultScreen from './tests/TestResultScreen';

export default class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<Router>
					<Scene hideNavBar={true} key='root'>
						<Scene key="LoginScreen" component={LoginScreen} title="LoginScreen" />
						<Scene key="SubscribeScreen" component={SubscribeScreen} title="SubscribeScreen"/>
						<Scene key="WelcomeScreen" component={WelcomeScreen} title="WelcomeScreen"/>
						<Scene key="TestsScreen" component={TestsScreen} title="TestsScreen" initial={true}/>
						<Scene key="TestResultScreen" component={TestResultScreen} title="TestResultScreen"/>
					</Scene>
				</Router>
			</View>
		)
	}
}
