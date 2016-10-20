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
		fontWeight: '500',
		marginVertical: 10,
		fontFamily: "Karla"
	},
	greenText: {
		color: stylesVars.green,
		fontFamily: "Karla"
	},
	blackText: {
		color: '#000',
		fontFamily: "Karla"
	},
	container: {
		flex: 1,
		marginTop: 20
	},
	actionButtonIcon: {
		fontSize: 25,
		color: 'black',
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
		margin: windowWidth * 0.1,
		flex: .5
	},
	inputLabel: {
		color:  stylesVars.green,
		fontSize: 13,
		fontWeight: '500',
		paddingTop: 10,
		fontFamily: "Karla"
	},
	inputPassword: {
		marginLeft: 15,
		width: 20,
		height: 21,
		fontFamily: "Karla"
	},
	inputUsername: {
		marginLeft: 15,
		width: 20,
		height: 20,
		fontFamily: "Karla"
	},
	inputContainer: {
		margin: 5,
		borderWidth: 1,
		borderBottomColor: '#CCC',
		borderColor: 'transparent'
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
	buttonTextWhite: {
		color: '#fff',
		fontFamily: 'Karla',
		fontSize: 14,
	},
	buttonTextBlack: {
		color: '#000',
		fontSize: 14,
		fontFamily: "Karla"
	},
	testItemTop: {
		flex: .5,
		flexDirection: "column",
		alignItems: 'center',
		justifyContent: 'center',
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
	levelResultBox: {
		paddingVertical: 5,
		backgroundColor: 'transparent',
		borderColor: stylesVars.pink,
		borderWidth: 2,
		borderRadius: 15,
		alignItems: 'center'
	},
	levelScoreTitle: {
		color: stylesVars.green,
		fontSize: 18,
		letterSpacing: 2,
		fontWeight: '600',
		paddingHorizontal: 20,
		fontFamily: 'Karla'
	},
	levelText: {
		color: stylesVars.green,
		fontSize: 14,
		textAlign: 'center',
		fontFamily: 'Karla'
	},
	testItemQuestion: {
		textAlign: 'center',
		fontWeight: '500',
		fontFamily: "Karla"
	},
	choiceButton: {
		paddingVertical: 5,
		paddingHorizontal: 30,
		borderColor: stylesVars.green,
		borderWidth: 2,
		borderRadius: 15,
		alignItems: 'center'
	},
	topBarContainer: {
		flex: .1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: stylesVars.green
	},
	tabTitle: {
		marginLeft: 10,
		color: 'white',
		fontSize: 18,
		fontWeight: "600",
		fontFamily: "Karla"
	},
	backButton: {
		width: 35
	},
});

module.exports = styles;
