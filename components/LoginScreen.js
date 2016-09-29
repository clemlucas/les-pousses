import React, { Component } from 'react';
import { View, Image, TextInput, Text, TouchableHighlight } from 'react-native';
import AppText from './AppText.js';
import LaunchLogo from './LaunchLogo.js';
import styles from '../assets/styles.js';
import multipleStyles from 'react-native-multiple-styles';

class LoginScreen extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	_onPressButton() {
		console.log('Pressed!');
	}

	render() {
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
							value={this.state.username}
							/>
					</View>
					<View style={styles.inputContainer}>
						<AppText color='rgb(0,183,0)'>{"Mot de passe".toUpperCase()}</AppText>
						<TextInput
							password={true}
							style={[styles.input, styles.whiteFont]}
							placeholder="Password"
							placeholderTextColor="#FFF"
							value={this.state.password}
							/>
					</View>
					<TouchableHighlight style={styles.forgotContainer} underlayColor='transparent' onPress={this._onPressButton}>
						<Text style={[styles.greenText, styles.text]}>Mot de passe oublié ?</Text>
					</TouchableHighlight>

					<TouchableHighlight underlayColor='transparent' onPress={this._onPressButton}>
						<View style={styles.buttonCenter}>
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
