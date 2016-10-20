import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import ScrollableTabView, {DefaultTabBar } from 'react-native-scrollable-tab-view';
import TabBar from './widgets/TabBar';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

// Import tabs
import FluxTab from './tabs/FluxTab';
import TasksTab from './tabs/TasksTab';
import ProfileTab from './tabs/ProfileTab';

import styles from '../styles.js';
import stylesVars from '../stylesVars.js';

export default class TabsScreen extends Component {
	render() {
		return (
			<View style={styles.container}>

				<ScrollableTabView
					locked={true}
					style={{marginTop: 20 }}
					tabBarBackgroundColor={stylesVars.green}
					tabBarActiveTextColor='white'
					tabBarInactiveTextColor='white'
					renderTabBar={() => <TabBar />}>
					<FluxTab tabLabel='ios-photos'/>
					<TasksTab tabLabel='ios-list'/>
					<ProfileTab tabLabel='ios-person'/>
				</ScrollableTabView>

				<ActionButton buttonColor={stylesVars.pink}>
					<ActionButton.Item buttonColor={stylesVars.pink} onPress={Actions.LoginScreen}>
						<Icon name="md-create" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor={stylesVars.pink} onPress={Actions.LoginScreen}>
						<Icon name="ios-aperture" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor={stylesVars.pink} onPress={Actions.addPlant}>
						<Image source={require('../../assets/images/add-plante-icon.png')} style={{width:20}} resizeMode='contain'/>
					</ActionButton.Item>
				</ActionButton>
			</View>
		);
	}
}
