import { Dimensions, StyleSheet } from 'react-native';
import stylesVars from './stylesVars';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	text: {
		fontFamily: "Karla",
		fontSize: 13,
	},
	greenTitle: {
		fontSize: 18,
		color: stylesVars.green,
		fontWeight: '500'
	},
	greenText: {
		color: stylesVars.green
	},
	blackText: {
		color: '#fff'
	},
	container: {
		flex: 1,
	},
	scrollView: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		flex: 1,
		overflow: "visible"
	},
	innerContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: 'center',
		justifyContent: 'center',
		height: windowHeight,
		width: windowWidth,
	},
	pageContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'transparent',
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
		backgroundColor: stylesVars.green
	},
	logoImage: {
		width: 150,
		flex: 1
	},
	inputs: {
		margin: windowWidth * 0.2,
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
	touchableButton: {
		margin: 5
	},
	buttonGreen: {
		height: 30,
		paddingVertical: 5,
		paddingHorizontal: 30,
		backgroundColor: stylesVars.green,
		borderRadius: 15,
		borderColor: 'transparent',
		alignItems: 'center'
	},
	buttonPink: {
		height: 30,
		paddingVertical: 5,
		paddingHorizontal: 30,
		backgroundColor: stylesVars.pink,
		borderRadius: 15,
		borderColor: 'transparent',
		alignItems: 'center'
	},
	buttonFacebook: {
		height: 30,
		paddingVertical: 5,
		paddingHorizontal: 30,
		backgroundColor: stylesVars.blueFb,
		borderRadius: 15,
		borderColor: 'transparent',
		alignItems: 'center'
	},
	buttonRight: {
		height: 30,
		paddingTop: 5,
		paddingRight: 5,
		margin: 5,
		backgroundColor: stylesVars.green,
		borderRadius: 15,
		borderColor: 'transparent',
		alignItems: 'flex-end'
	},
	buttonText: {
		color: '#fff',
		fontFamily: 'Karla',
		fontSize: 14,
	},
	testItemTop: {
		flex: .5,
		flexDirection: "column",
		alignItems: 'center',
		justifyContent: 'center'
	},
	testItemBody: {
		flex: .25,
		flexDirection: "column",
		alignItems: 'center',
		justifyContent: 'center'
	},
	testItemFooter: {
		flex: .25,
		flexDirection: "column",
		alignItems: 'center',
		justifyContent: 'center'
	},
	testItemImage: {
		borderRadius: 70,
	},
	choiceButton: {
		paddingVertical: 5,
		paddingHorizontal: 30,
		borderColor: stylesVars.green,
		borderWidth: 2,
		borderRadius: 15,
		alignItems: 'center'
	}
});

module.exports = styles;
