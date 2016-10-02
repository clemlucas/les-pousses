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
	componentWillMount() {
		StatusBar.setBarStyle('default', true);
	}

	render() {
		return (
			<View style={styles.pageContainer}>

				<TestItem
					imageUrl={require('../../../assets/images/tests/bouture.jpg')}
					titleKey='takingCuttingsTitle'
					questionKey='takingCuttingsQuestion'
					choices={['choice A', 'choice B', 'choice C']}
					answer='choice A'
					/>
			</View>
		);
	}
}
