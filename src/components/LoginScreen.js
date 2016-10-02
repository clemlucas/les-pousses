import React, { Component } from 'react';
import { View, Image, TextInput, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppText from './AppText.js';
import LaunchLogo from './LaunchLogo.js';
import styles from '../styles.js';
import multipleStyles from 'react-native-multiple-styles';
import I18n from '../configs/i18n';

class LoginScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	render() {
		const goToWelcomeScreen = () => Actions.WelcomeScreen({
			username: this.state.username,
			password: this.state.password
		});

		return (
			<View style={styles.pageContainer}>
				<View style={styles.logoContainer}>
					<LaunchLogo/>
				</View>
				<View style={styles.inputs}>

					<View style={styles.inputContainer}>
						<AppText color='rgb(0,183,0)'>{I18n.t('username')}</AppText>
						<TextInput
							style={styles.input}
							placeholderTextColor="transparent"
							onChangeText={(username) => this.setState({username})}
							/>
					</View>

					<View style={styles.inputContainer}>
						<AppText color='rgb(0,183,0)'>{I18n.t('password')}</AppText>
						<TextInput
							password={true}
							style={styles.input}
							placeholderTextColor="transparent"
							onChangeText={(password) => this.setState({password})}
							/>
					</View>

					<TouchableHighlight style={styles.forgotContainer} underlayColor='transparent' onPress={this._onPressButton}>
						<Text style={[styles.greenText, styles.text]}>{I18n.t('forgotPassword')}</Text>
					</TouchableHighlight>

					<TouchableHighlight style={styles.touchableButton} underlayColor='transparent' onPress={goToWelcomeScreen}>
						<View style={styles.buttonGreen}>
							<Text style={styles.buttonText}>{I18n.t('connection')}</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight style={styles.touchableButton} underlayColor='transparent' onPress={goToWelcomeScreen}>
						<View style={styles.buttonFacebook}>
							<Text style={styles.buttonText}>Facebook</Text>
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
