import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import styles from '../../assets/styles.js';
import I18n from '../configs/i18n';
import { Actions } from 'react-native-router-flux';

const welcomeStyles = StyleSheet.create({
	welcomeTitle: {
		fontSize: 18,
		lineHeight: 18,
		letterSpacing: 2,
		padding: 20
	},
	welcomeText: {
		flex: 1,
		textAlign: 'center'
	}
});

export default class WelcomeScreen extends Component {
	constructor(props) {
		super(props);
	}

	onPressButton() {
		console.log("onPressButton");
	}

	render() {
		return(
			<View style={styles.flexColumnCenter}>
				<View style={styles.textFlexbox}>
					<Text style={[styles.greenText, welcomeStyles.welcomeTitle]}>{I18n.t('welcomeTitle').toUpperCase()}</Text>
				</View>

				<View style={styles.textFlexbox}>
					<Text style={[styles.greenText, welcomeStyles.welcomeText]}>{I18n.t('welcomeText')}</Text>
				</View>


				<View style={styles.flexRowCenter}>

					<TouchableHighlight style={{margin: 20}} underlayColor='transparent' onPress={Actions.LoginScreen}>
						<View style={styles.buttonPink}>
							<Text style={styles.buttonText}>{I18n.t('passButtonText')}</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight underlayColor='transparent' onPress={this.onPressButton}>
						<View style={styles.buttonGreen}>
							<Text style={styles.buttonText}>{I18n.t('startTestButtonText')}</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}
