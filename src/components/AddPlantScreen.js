import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlphabetListView from 'react-native-alphabetlistview';

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

class SectionHeader extends Component {
	render() {
		var viewStyle = {
			width: 0,
			height: 0
		};
		return (
			<View style={viewStyle}></View>
		);
	}
}

class SectionItem extends Component {
	render() {
		return (
			<Text style={{color:stylesVars.pink}}>{this.props.title}</Text>
		);
	}
}

export default class AddPlantScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			plantItems: {
				A: this.getPlantNamesByLetter("A"),
				B: this.getPlantNamesByLetter("B"),
				C: this.getPlantNamesByLetter("C"),
				D: this.getPlantNamesByLetter("D"),
				E: this.getPlantNamesByLetter("E"),
				F: this.getPlantNamesByLetter("F"),
				G: this.getPlantNamesByLetter("G"),
				H: this.getPlantNamesByLetter("H"),
				I: this.getPlantNamesByLetter("I"),
				J: this.getPlantNamesByLetter("J"),
				K: this.getPlantNamesByLetter("K"),
				L: this.getPlantNamesByLetter("L"),
				M: this.getPlantNamesByLetter("M"),
				N: this.getPlantNamesByLetter("N"),
				O: this.getPlantNamesByLetter("O"),
				P: this.getPlantNamesByLetter("P"),
				Q: this.getPlantNamesByLetter("Q"),
				R: this.getPlantNamesByLetter("R"),
				S: this.getPlantNamesByLetter("S"),
				T: this.getPlantNamesByLetter("T"),
				U: this.getPlantNamesByLetter("U"),
				V: this.getPlantNamesByLetter("V"),
				W: this.getPlantNamesByLetter("W"),
				X: this.getPlantNamesByLetter("X"),
				Y: this.getPlantNamesByLetter("Y"),
				Z: this.getPlantNamesByLetter("Z"),
			}
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

	getPlantsListData() {
		var data = {

		};

		return data;
	}

	render() {

		return(
			<View style={styles.container}>
				<View style={{flex: .1, marginTop: 20, backgroundColor: stylesVars.green}}>

				</View>
				<View style={{flex: .9}}>
					<AlphabetListView
						enableEmptySections
						data={this.state.plantItems}
						cell={Cell}
						cellHeight={30}
						sectionListItem={SectionItem}
						sectionHeader={SectionHeader}
						sectionHeaderHeight={22.5}
						/>
				</View>
			</View>
		);
	}
}
