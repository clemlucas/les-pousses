import React, { Component, } from 'react';
import { View, StatusBar } from 'react-native';
import { Router, Scene, Reducer, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import SubscribeScreen from './SubscribeScreen';
import TestsScreen from './tests/TestsScreen';
import TestResultScreen from './tests/TestResultScreen';
import TabsScreen from './TabsScreen';
import AddPlantScreen from './AddPlantScreen';
import PlantCard from './PlantCard';

const reducerCreate = params => {
	const defaultReducer = Reducer(params);
	return (state, action)=>{
		console.log("ACTION:", action);
		return defaultReducer(state, action);
	}
};

export default class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<Router>
					<Scene hideNavBar key='root'>
						<Scene key="LoginScreen" component={LoginScreen} title="LoginScreen" type={ActionConst.REPLACE}/>
						<Scene key="SubscribeScreen" component={SubscribeScreen} title="SubscribeScreen"/>
						<Scene key="WelcomeScreen" component={WelcomeScreen} title="WelcomeScreen" type={ActionConst.REPLACE}/>
						<Scene key="TestsScreen" component={TestsScreen} title="TestsScreen" type={ActionConst.REPLACE}/>
						<Scene key="TestResultScreen" component={TestResultScreen} title="TestResultScreen" type={ActionConst.REPLACE}/>
						<Scene key="TabsScreen" component={TabsScreen} title="TabsScreen" type={ActionConst.RESET}/>
						<Scene key="addPlant" initial hideNavBar>
							<Scene key="AddPlantScreen" component={AddPlantScreen} title="AddPlantScreen" type={ActionConst.PUSH}/>
							<Scene key="PlantCard" direction="vertical" component={PlantCard} title="PlantCard" type={ActionConst.PUSH}/>
						</Scene>
					</Scene>
				</Router>
			</View>
		)
	}
}
