import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableHighlight,
	StyleSheet,
	Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ResponsiveImage from 'react-native-responsive-image';

import I18n from '../../configs/i18n';
import styles from '../../styles.js';

export default class TestItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedChoice: ''
		}

		this.renderChoice = this.renderChoice.bind(this);
	}

	renderChoice(index, choice) {
		const _this = this;
		return (
			<TouchableHighlight
				key={'choice' + index}
				style={[styles.touchableButton, {marginVertical: 5}]}
				underlayColor='transparent'
				onPress={() => {
					const selectedChoice = this.props.test.choices[index];
					this.props.pressChoice(selectedChoice);
				}
			}>
				<View style={styles.choiceButton}>
					<Text>{I18n.t(choice)}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	render() {
		var choices = [];
		for (var i = 0; i < this.props.test.choices.length; i++) {
			choices.push(this.renderChoice(i, this.props.test.choices[i]));
		}

		return (
			<View style={styles.container}>
					<View style={styles.innerContainer}>

						<View style={styles.testItemTop}>
							<ResponsiveImage
								initWidth="150" initHeight="150"
								style={styles.testItemImage}
								source={this.props.test.image}/>
							<Text style={[styles.greenTitle, {marginVertical: 10}]}>{I18n.t(this.props.test.titleKey)}</Text>
							<Text style={{fontWeight: '500'}}>{I18n.t(this.props.test.questionKey)}</Text>
						</View>

						<View style={styles.testItemBody}>
							{choices}
						</View>

						<View style={styles.testItemFooter}>
							<TouchableHighlight style={styles.touchableButton} underlayColor='transparent' onPress={Actions.WelcomeScreen}>
								<View style={styles.buttonPink}>
									<Text style={styles.buttonTextWhite}>{I18n.t('passButtonText')}</Text>
								</View>
							</TouchableHighlight>
						</View>

					</View>
			</View>
		);
	}
}

TestItem.PropTypes = {
	test: PropTypes.object.isRequired,
	pressChoice: PropTypes.func.isRequired,
};
