import React, { Component, } from 'react';
import { View, StatusBar } from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import SubscribeScreen from './SubscribeScreen';
import TestsScreen from './tests/TestsScreen';
import TestResultScreen from './tests/TestResultScreen';
import TabsScreen from './TabsScreen';
import AddPlantScreen from './AddPlantScreen';

export default class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<Router>
					<Scene hideNavBar={true} key='root'>
						<Scene key="LoginScreen" component={LoginScreen} title="LoginScreen" type={ActionConst.REPLACE}/>
						<Scene key="SubscribeScreen" component={SubscribeScreen} title="SubscribeScreen"/>
						<Scene key="WelcomeScreen" component={WelcomeScreen} title="WelcomeScreen" type={ActionConst.REPLACE}/>
						<Scene key="TestsScreen" component={TestsScreen} title="TestsScreen" type={ActionConst.REPLACE}/>
						<Scene key="TestResultScreen" component={TestResultScreen} title="TestResultScreen" type={ActionConst.REPLACE}/>
						<Scene key="TabsScreen" component={TabsScreen} title="TabsScreen"  type={ActionConst.RESET}/>
						<Scene key="AddPlantScreen" component={AddPlantScreen} title="AddPlantScreen" initial type={ActionConst.PUSH}/>
					</Scene>
				</Router>
			</View>
		)
	}
}
