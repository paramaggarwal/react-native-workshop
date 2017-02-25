/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      text: '',
      items: []
    }
  }
  onSubmit() {
    this.setState({
      text: '',
      items: this.state.items.concat([this.state.text])
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the React Native Workshop!
        </Text>
        <TextInput
          style={{width:200,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.onSubmit}
          value={this.state.text}
        />

        <Text style={styles.instructions}>
          {/*JSON.stringify(this.state.items)*/}
        </Text>
        {this.state.items.map((item)=>{
          return (<Text style={styles.instructions}>
            {item}
          </Text>)
        })}
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 20,

    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});
