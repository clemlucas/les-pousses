import React, { Component, PropTypes } from 'react';
import { View, Text, ListView } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import I18n from '../../configs/i18n';
import styles from '../../../assets/styles';

export default class TestItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.flexColumnCenter}>
				<ResponsiveImage
					initWidth="150" initHeight="150"
					style={styles.testItemImage}
					source={this.props.imageUrl}/>
				<Text>{I18n.t(this.props.titleKey)}</Text>
				<Text>{I18n.t(this.props.questionKey)}</Text>

					{this.props.choices.map(function(choice) {
						return <Text>{choice}</Text>;
					})}

			</View>
		);
	}
}

TestItem.PropTypes = {
	imageUrl: PropTypes.object.isRequired,
	titleKey: PropTypes.string.isRequired,
	questionKey: PropTypes.string.isRequired,
	choices: PropTypes.array.isRequired,
	answerKey: PropTypes.array.isRequired
};
