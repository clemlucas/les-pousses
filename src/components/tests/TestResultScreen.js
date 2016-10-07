import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles.js';
import stylesVars from '../../stylesVars';
import I18n from '../../configs/i18n';

const testResultStyles = StyleSheet.create({
	levelResultBox: {
		paddingVertical: 5,
		backgroundColor: 'transparent',
		borderColor: stylesVars.pink,
		borderWidth: 2,
		borderRadius: 15,
		alignItems: 'center'
	},
	levelScoreTitle: {
		color: stylesVars.green,
		fontSize: 18,
		letterSpacing: 2,
		fontWeight: '600',
		paddingHorizontal: 20
	},
	levelText: {
		color: stylesVars.green,
		fontSize: 14,
		textAlign: 'center'
	}
});

export default class TestResultScreen extends Component {
	constructor(props) {
		super(props);
	}

	// TODO: To adapt if more tests are added
	formatScore(score) {
		if (score <= 2) {
			return (I18n.t('level') + " " + I18n.t('levelHue').toLowerCase());
		}
		if (score > 2 && score <= 4) {
			return (I18n.t('level') + " " + I18n.t('levelSecateurs').toLowerCase());
		}
		if (score === 5) {
			return (I18n.t('level') + " " + I18n.t('levelTutor').toLowerCase());
		}
	}

	getLevelResultText(score) {
		if (score <= 2) {
			return I18n.t('levelHueText');
		}
		if (score > 2 && score <= 4) {
			return I18n.t('levelSecateursText');
		}
		if (score === 5) {
			return I18n.t('levelTutorText');
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.testItemTop}>
					<View style={testResultStyles.levelResultBox}>
						<Text style={testResultStyles.levelScoreTitle}>{this.formatScore(this.props.testScore)}</Text>
					</View>
				</View>

				<View style={styles.testItemBody}>
					<Text style={testResultStyles.levelText}>{this.getLevelResultText(this.props.testScore)}</Text>
				</View>

				<View style={styles.testItemFooter}>
					<TouchableHighlight underlayColor='transparent' onPress={Actions.TabsScreen}>
						<View style={styles.buttonGreen}>
							<Text style={styles.buttonTextWhite}>{I18n.t('continue')}</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}
