import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ListView, TouchableHighlight} from 'react-native';
import Hr from 'react-native-hr';
import { Actions } from 'react-native-router-flux';
import I18n from '../configs/i18n';

import { plants } from '../../assets/plants.js';
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
				fontSize: 14,
				fontFamily: "Karla"
			},
			plantCellLabel: {
				fontSize: 16,
				fontWeight: "600",
				fontFamily: "Karla"
			}
		});

		return (
			<TouchableHighlight
				underlayColor={'#eee'}
				onPress={() => Actions.PlantCard(this.props.plant)}>
				<View>
					<View style={plantCellStyles.plantCellContainer}>
						<Text style={plantCellStyles.plantCellTitle}>{this.props.plant.scientificName}</Text>
						<Text style={plantCellStyles.plantCellLabel}>{this.props.plant.name}</Text>
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
			<PlantCell plant={rowData}/>
		);
	}

	render() {
		return(
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
				<ListView
					style={{flex: .9}}
					dataSource={this.state.dataSource}
					renderRow={this.renderPlantCell}/>
			</View>
		);
	}
}
