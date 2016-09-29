import React, { Component, } from 'react'
import { View, WebView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import LoginScreen from './LoginScreen.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <WebView>
          
        </WebView>
      </View>
    )
  }
}