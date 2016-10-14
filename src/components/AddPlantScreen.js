import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ListView, TouchableHighlight} from 'react-native';
import Hr from 'react-native-hr';
import { Actions } from 'react-native-router-flux';
import I18n from '../configs/i18n';

import plants from '../../assets/plants.js';
import styles from '../styles';
import stylesVars from '../stylesVars';

class PlantCell extends Component {

	render(){
		const plantCellStyles = StyleSheet.create({
			plantCellContainer: {
				flex: 1,
				paddingLeft: 7,
				paddingVertical: 15,
			},
			plantCellTitle: {
				color: stylesVars.green,
				fontSize: 14
			},
			plantCellLabel: {
				fontSize: 16,
				fontWeight: "600"
			}
		});

		return (
			<TouchableHighlight
				underlayColor={'#eee'}
				onPress={(item) => console.log("press")}>
				<View>
					<View style={plantCellStyles.plantCellContainer}>
						<Text style={plantCellStyles.plantCellTitle}>{this.props.scientificName}</Text>
						<Text style={plantCellStyles.plantCellLabel}>{this.props.name}</Text>
					</View>
					<Hr lineColor='rgba(179, 179, 179, 0.50)'/>
				</View>
			</TouchableHighlight>
		);
	}
}

export default class AddPlantScreen extends Component {

	constructor(props) {
		super(props);

		this.reactCellModule = "PlantCell";
		this.propPrefix = "plant";
	}

	getPlantNamesByLetter(letter) {
		return plants.filter((item) => this.filterPlant(item, letter)).map(function(item) {
			return item.name;
		});
	}

	filterPlant(item, letter) {
		return item.name.startsWith(letter);
	}

	componentWillMount() {
		// Alphabetic sort and create plant names array
		// TODO: Get plants from backend
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		const sortedPlants = plants.sort(function(a, b) { return (a.scientificName > b.scientificName); });

		this.state = {
			dataSource: ds.cloneWithRows(sortedPlants),
		};
	}

	renderPlantCell(rowData) {
		return (
			<PlantCell scientificName={rowData.scientificName} name={rowData.name}/>
		);
	}

	render() {
		const screenStyle = StyleSheet.create({
			topBarContainer: {
				flex: .1,
				flexDirection: 'row',
				alignItems: 'center',
				marginTop: 20,
				backgroundColor: stylesVars.green
			},
			tabTitle: {
				marginLeft: 10,
				color: 'white',
				fontSize: 16,
				fontWeight: "600"
			},
			backButton: {
				width: 40
			}
		});

		return(
			<View style={styles.container}>
				<View style={screenStyle.topBarContainer}>
					<TouchableHighlight
						style={{marginLeft: 10}}
						underlayColor={'transparent'}
						onPress={Actions.pop}>
						<Image resizeMode='contain' style={screenStyle.backButton} source={require('../../assets/images/back.png')}/>
					</TouchableHighlight>
					<Text style={screenStyle.tabTitle}>{I18n.t('addPlant')}</Text>
				</View>
				<ListView
					style={{flex: .9}}
					dataSource={this.state.dataSource}
					renderRow={this.renderPlantCell}/>
			</View>
		);
	}
}
