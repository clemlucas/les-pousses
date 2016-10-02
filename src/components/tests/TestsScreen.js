import React, { Component } from 'react';
import {
	View,
	StatusBar,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import I18n from '../../configs/i18n';
import tests from '../../../assets/tests.js';
import TestItem from './TestItem';

export default class TestsScreen extends Component {
	constructor(props) {
			super(props);

			this.state = {
				currentTest: 0,
				testScore: 0
			}
	}

	componentWillMount() {
		StatusBar.setBarStyle('default', true);
	}

	pressChoice(choice) {
		var testScore = this.state.testScore;

		if (choice === tests[this.state.currentTest].answer) {
			testScore++;
		}

		console.log("Current score: " + testScore + "/4");

		if (this.state.currentTest === tests.length - 1) {
			Actions.WelcomeScreen();
			return;
		}

		this.setState({
			currentTest: this.state.currentTest + 1,
			testScore: testScore
		})
	}

	nextTest() {
	}

	render() {
		return (
			<TestItem
				test={tests[this.state.currentTest]}
				pressChoice={this.pressChoice.bind(this)}/>
		);
	}
}
