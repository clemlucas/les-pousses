import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';
import TableView, { Item, Section } from 'react-native-tableview';

import plants from '../../assets/plants.js';

import styles from '../styles';
import stylesVars from '../stylesVars';

class PlantCell extends Component {

	render(){
		const plantCellStyles = StyleSheet.create({
			plantCellContainer: {
				flex: 1,
				paddingLeft: 15
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

		if (this.props.data.backgroundColor !== undefined) {
			style.backgroundColor = this.props.data.backgroundColor;
		}

		return (
			<View style={plantCellStyles.plantCellContainer}>
				<Text style={plantCellStyles.plantCellTitle}>{this.props.data.title}</Text>
				<Text style={plantCellStyles.plantCellLabel}>{this.props.data.label}</Text>
			</View>
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
		// const array = plants.sort(function(a, b) { return (a.scientificName > b.scientificName); }).map((item) => item.name);
		// this.setState({
		// 	plantNames: array
		// });
	}

	// renderItem(itemData, key, index) {
	//        //TODO passing itemData={itemData} doesn't seem to work... so pass all data props with a prefix to make sure they don't clash
	//        //with other <Item> props
	//        var item = {};
	//        Object.keys(itemData||{}).forEach(k => {
	//           item[this.propPrefix+k] = itemData[k];
	//        });
	//        item[this.propPrefix+"key"] = key;
	//        //Random images for the demo
	//        item[this.propPrefix+"url"] = (index%2 == 0?
	//            "http://images.dinosaurpictures.org/cetiosaurus_eb59.jpg" :
	//            "http://images.dinosaurpictures.org/090714-nothronychus-02_8e4b.jpg");
	//
	//        return (<Item {...item} height={220} backgroundColor={index%2==0?"white":"grey"} key={key} label={key}></Item>);
	//    }

	generatePlantListItem() {
		const sortedPlants = plants.sort(function(a, b) { return (a.scientificName > b.scientificName); });
		console.log(sortedPlants.length, sortedPlants);
		var list = [];

		for (var i = 0; i < sortedPlants.length; i++) {
			const key = "plant" + i;
			list.push(<Item key={key} title={sortedPlants[i].scientificName} label={sortedPlants[i].name}/>);
		}

		return list;
	}

	render() {

		return(
			<View style={styles.container}>
				<View style={{flex: .1, marginTop: 20, backgroundColor: stylesVars.green}}>

				</View>
				<TableView style={{flex: .9}}
					reactModuleForCell={this.reactCellModule}
					tableViewStyle={TableView.Consts.Style.Grouped}
					tableViewCellStyle={TableView.Consts.CellStyle.Default}
					onPress={(event) => console.log(event)}>
					<Section arrow={true}>
						{this.generatePlantListItem()}
					</Section>
				</TableView>
			</View>
		);
	}
}

AppRegistry.registerComponent('PlantCell', () => PlantCell);
