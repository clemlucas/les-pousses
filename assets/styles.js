import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();

const styles = EStyleSheet.create({
	$green: 'rgb(0,183,0)',
	$pink: 'rgb(255, 204, 199)',
	text: {
		fontFamily: "Karla",
		fontSize: 13,
	},
	greenText: {
		color: '$green'
	},
	blackText: {
		color: '#fff'
	},
	flexRowCenter: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	flexColumnCenter: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textFlexbox: {
		flex: 1,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
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
		backgroundColor: '$green'
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
	buttonGreen: {
		height: 30,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 30,
		paddingRight: 30,
		backgroundColor: '$green',
		borderRadius: 15,
		borderColor: 'transparent',
		alignItems: 'center'
	},
	buttonPink: {
		height: 30,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 30,
		paddingRight: 30,
		backgroundColor: '$pink',
		borderRadius: 15,
		borderColor: 'transparent',
		alignItems: 'center'
	},
	buttonRight: {
		height: 30,
		paddingTop: 5,
		paddingRight: 5,
		margin: 5,
		backgroundColor: '$green',
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
