import React, { Component } from 'react';
import { View, Image, TextInput, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LaunchLogo from './widgets/LaunchLogo.js';

import styles from '../styles.js';
import multipleStyles from 'react-native-multiple-styles';
import I18n from '../configs/i18n';

class LoginScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			user: null,
		};
	}

	render() {
		const goToWelcomeScreen = () => Actions.WelcomeScreen({
			username: this.state.username,
			password: this.state.password
		});

		var _this = this;
		var user = this.state.user;

		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<LaunchLogo/>
				</View>
				<View style={styles.inputs}>

					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>{I18n.t('username')}</Text>
						<TextInput
							style={styles.input}
							autoFocus={false}
							autoCapitalize='none'
							autoCorrect={false}
							returnKeyType='next'
							placeholderTextColor="transparent"
							onChangeText={(username) => this.setState({username})}
							/>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>{I18n.t('password')}</Text>
						<TextInput
							password={true}
							style={styles.input}
							autoFocus={false}
							autoCapitalize='none'
							autoCorrect={false}
							returnKeyType='next'
							placeholderTextColor="transparent"
							onChangeText={(password) => this.setState({password})}
							/>
					</View>

					<TouchableHighlight style={styles.forgotContainer} underlayColor='transparent' onPress={this._onPressButton}>
						<Text style={[styles.greenText, styles.text]}>{I18n.t('forgotPassword')}</Text>
					</TouchableHighlight>

					<TouchableHighlight style={styles.touchableButton} underlayColor='transparent' onPress={goToWelcomeScreen}>
						<View style={styles.buttonGreen}>
							<Text style={styles.buttonTextWhite}>{I18n.t('connection')}</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight style={styles.touchableButton} underlayColor='transparent' onPress={goToWelcomeScreen}>
						<View style={styles.buttonFacebook}>
							<Text style={styles.buttonTextWhite}>Facebook</Text>
						</View>
					</TouchableHighlight>

					<View style={styles.flexRowCenter}>
						<Text style={[styles.greenText, styles.text]}>Pas encore enregistré ? </Text>
						<TouchableHighlight underlayColor='transparent' onPress={Actions.SubscribeScreen}>
							<Text style={[styles.greenText, styles.text, {textDecorationLine: 'underline'}]}>Créer un compte</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		)
	}
}

export default LoginScreen
