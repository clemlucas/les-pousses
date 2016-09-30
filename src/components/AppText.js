import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'

export default class AppText extends Component {
  static defaultProps = {
    color: '#000'
  }
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Text style={{
          fontFamily: "Karla",
          color:  this.props.color,
          fontSize: 13,
          fontWeight: 'bold'
        }}>
        {this.props.children}
      </Text>
    );
  }
}

AppText.PropTypes = {
  color: PropTypes.object.isRequired,
};