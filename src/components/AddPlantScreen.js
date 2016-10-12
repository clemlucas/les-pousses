import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlphabetListView from 'react-native-alphabetlistview';
import TableView, { Item, Section } from 'react-native-tableview';

import plants from '../../assets/plants.js';

import styles from '../styles';
import stylesVars from '../stylesVars';

class Cell extends Component {
	render() {
		return (
			<View style={{height:30}}>
				<Text>{this.props.item}</Text>
			</View>
		);
	}
}

export default class AddPlantScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			plantNames: []
		}
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
		const array = plants.sort(function(a, b) { return (a.name > b.name); }).map((item) => item.name);
		this.setState({
			plantNames: array
		});
	}

	generatePlantListItem() {
		var list = [];
		for (var i = 0; i < this.state.plantNames.length; i++) {
			const key = "plant" + i;
			list.push(<Item key={key}>{this.state.plantNames[i]}</Item>);
		}

		return list;
	}

	render() {

		return(
			<View style={styles.container}>
				<View style={{flex: .1, marginTop: 20, backgroundColor: stylesVars.green}}>

				</View>
				<TableView style={{flex: .9}}
					tableViewStyle={TableView.Consts.Style.Plain}
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
