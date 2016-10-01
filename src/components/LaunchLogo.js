import React, { Component } from 'react';
import {
	View,
	Image,
	Animated
} from 'react-native'

export default class LaunchScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bounceValue: new Animated.Value(0),
		};
	}

	render() {
		return (
			<Animated.Image
			source={require('../../assets/images/launch_logo.png')}
			resizeMode="contain"
			style={{ width: 150,
				flex: 1,
				transform: [                        // `transform` is an ordered array
					{scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
				]
			}}/>
		)
	}

	componentDidMount() {
		this.state.bounceValue.setValue(1);     // Start large
		Animated.spring(                          // Base: spring, decay, timing
			this.state.bounceValue,                 // Animate `bounceValue`
			{
				toValue: 0.8,                         // Animate to smaller size
				friction: 1,                          // Bouncier spring
			}
		).start();
	}
}
