import React, { Component } from 'react';
import { View, Image, TextInput, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppText from './AppText.js';
import LaunchLogo from './LaunchLogo.js';
import styles from '../../assets/styles.js';
import multipleStyles from 'react-native-multiple-styles';

class LoginScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	_onPressButton() {
		console.log("_onPressButton");
	}

	render() {
		const goToWelcomeScreen = () => Actions.WelcomeScreen({
			username: this.state.username,
			password: this.state.password
		});

		return (
			<View style={styles.loginContainer}>
				<View style={styles.logoContainer}>
					<LaunchLogo/>
				</View>
				<View style={styles.inputs}>
					<View style={styles.inputContainer}>
						<AppText color='rgb(0,183,0)'>{"Nom d'utilisateur".toUpperCase()}</AppText>
						<TextInput
							style={[styles.input, styles.whiteFont]}
							placeholder="Username"
							placeholderTextColor="#FFF"
							onChangeText={(username) => this.setState({username})}
							/>
					</View>
					<View style={styles.inputContainer}>
						<AppText color='rgb(0,183,0)'>{"Mot de passe".toUpperCase()}</AppText>
						<TextInput
							password={true}
							style={[styles.input, styles.whiteFont]}
							placeholder="Password"
							placeholderTextColor="#FFF"
							onChangeText={(password) => this.setState({password})}
							/>
					</View>
					<TouchableHighlight style={styles.forgotContainer} underlayColor='transparent' onPress={this._onPressButton}>
						<Text style={[styles.greenText, styles.text]}>Mot de passe oublié ?</Text>
					</TouchableHighlight>

					<TouchableHighlight underlayColor='transparent' onPress={goToWelcomeScreen}>
						<View style={styles.buttonGreen}>
							<Text style={styles.buttonText}>Continuer  ▸</Text>
						</View>
					</TouchableHighlight>

					<View style={styles.flexRowCenter}>
						<Text style={[styles.greenText, styles.text]}>Pas encore enregistré ? </Text>
						<TouchableHighlight underlayColor='transparent' onPress={this._onPressButton}>
							<Text style={[styles.greenText, styles.text, {textDecorationLine: 'underline'}]}>Créer un compte</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		)
	}
}

export default LoginScreen
