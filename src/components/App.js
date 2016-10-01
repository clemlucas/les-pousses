import React, { Component, } from 'react';
import { View, StatusBar } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import SubscribeScreen from './SubscribeScreen';

export default class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<StatusBar
					backgroundColor="rgb(0,183,0)"
					barStyle="light-content"
					/>
				<Router>
					<Scene hideNavBar={true} key='root'>
						<Scene key="LoginScreen" component={LoginScreen} title="LoginScreen"/>
						<Scene key="WelcomeScreen" component={WelcomeScreen} title="WelcomeScreen"/>
						<Scene key="SubscribeScreen" component={SubscribeScreen} title="SubscribeScreen" initial={true}/>
					</Scene>
				</Router>
			</View>
		)
	}
}
