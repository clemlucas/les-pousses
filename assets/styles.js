import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	text: {
		fontFamily: "Karla",
		fontSize: 13,
	},
	greenText: {
		color: 'rgb(0,183,0)'
	},
	blackText: {
		color: '#fff'
	},
	flexRowCenter: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'transparent'
	},
	halfHeight: {
		flex: 2,
	},
	quarterHeight: {
		flex: 1,
		backgroundColor: '#000'
	},
	logoContainer: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(0,183,0)'
	},
	inputs: {
		margin: 30,
		flex: .5
	},
	inputPassword: {
		marginLeft: 15,
		width: 20,
		height: 21
	},
	inputUsername: {
		marginLeft: 15,
		width: 20,
		height: 20
	},
	inputContainer: {
		margin: 5,
		borderWidth: 1,
		borderBottomColor: '#CCC',
		borderColor: 'transparent'
	},
	inputLabel: {
		paddingTop: 10,
	},
	input: {
		height: 40,
		fontSize: 14,
	},
	forgotContainer: {
		alignItems: 'flex-end',
		paddingRight: 5,
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonCenter: {
		height: 30,
		padding: 5,
		backgroundColor: 'rgb(0,183,0)',
		borderRadius: 15,
		borderColor: 'transparent',
		alignItems: 'center'
	},
	buttonRight: {
		height: 30,
		paddingTop: 5,
		paddingRight: 5,
		margin: 5,
		backgroundColor: 'rgb(0,183,0)',
		borderRadius: 15,
		borderColor: 'transparent',
		alignItems: 'flex-end'
	},
	buttonText: {
		color: '#fff',
		fontFamily: 'Karla',
		fontSize: 14,
	}
});

module.exports = styles;
