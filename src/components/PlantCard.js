import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Hr from 'react-native-hr';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

import I18n from '../configs/i18n';
import { SUNSHINE, WATERING } from '../../assets/plants';
import styles from '../styles';
import stylesVars from '../stylesVars';

const plantCardStyles = StyleSheet.create({
	cardImage: {
		width: 40,
		height: 40,
		margin: 10,
	}
});

export default class PlantCard extends Component {
	sunshineToImage(sunshine) {
		switch (sunshine) {
			case SUNSHINE.SHADE:
			return require('../../assets/images/shade.png');
			case SUNSHINE.HALF_SUN:
			return require('../../assets/images/half-sun.png');
			case SUNSHINE.SUN:
			return require('../../assets/images/sun.png');
			case (SUNSHINE.SHADE | SUNSHINE.HALF_SUN):
			return require('../../assets/images/shade.png'); // wait for picto
			case (SUNSHINE.HALF_SUN | SUNSHINE.SUN):
			return require('../../assets/images/sun.png'); // wait for picto
		}
	}

	wateringToImage(watering) {
		switch (watering) {
			case WATERING.LOW:
			return require('../../assets/images/one-drop.png');
			case WATERING.MEDIUM:
			return require('../../assets/images/two-drop.png');
			case WATERING.HIGH:
			return require('../../assets/images/three-drop.png');
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.topBarContainer}>
					<TouchableHighlight
						style={{marginLeft: 10}}
						underlayColor={'transparent'}
						onPress={Actions.pop}>
						<Image resizeMode='contain' style={styles.backButton} source={require('../../assets/images/back.png')}/>
					</TouchableHighlight>
					<Text style={styles.tabTitle}>{I18n.t('addPlant')}</Text>
				</View>

				<View style={{marginHorizontal: 10, paddingTop: 10, flex: 0.9}}>
					<Text style={styles.greenText}>{this.props.scientificName}</Text>
					<Text style={[styles.greenText, {fontWeight: "800"}]}>{this.props.name}</Text>

					<View style={[styles.levelResultBox, {marginTop: 20, marginHorizontal: 50}]}>
						<Text style={styles.levelScoreTitle}>{I18n.t("level") + " " + I18n.t(this.props.level)}</Text>
					</View>

					<View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Image style={plantCardStyles.cardImage} resizeMode='contain' source={this.sunshineToImage(this.props.sunshine)}/>
						<Image style={plantCardStyles.cardImage} resizeMode='contain' source={require('../../assets/images/thermometer.png')}/>
						<Image style={plantCardStyles.cardImage} resizeMode='contain' source={this.wateringToImage(this.props.watering)}/>
					</View>
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
						<Text style={styles.greenText}>{this.props.temperatureMin}°C / {this.props.temperatureMax}°C</Text>
						</View>

						<View style={{marginVertical: 20, marginHorizontal: 50}}><Hr lineColor='rgba(0, 183, 0, 0.50)'/></View>

						<Text>{this.props.detail}</Text>

					</View>
				</View>
			);
		}
	}
