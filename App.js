import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import Teams from './src/components/Teams';


import axios from 'axios';

const styles = StyleSheet.create({
  welcomeStyle: {
    backgroundColor: '#ffffff'
  },
  textStyle: {
    fontSize: 50
  },
  header: {
    backgroundColor: '#003DA5',
    tintColor: '#FFFFFF'
  }
});

const NavApp = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'twtrBA',
      headerStyle: styles.header
    }
  },
  Teams: {
    screen: Teams,
    navigationOptions: {
      headerTitle: 'Teams'
    }
  }
});

export default class App extends React.Component {

  componentDidMount() {
    // axios.get('http://localhost:3000/james_harden')
    //   .then(res => {
    //     return res.data.statuses;
    //   })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(console.error);
  }
  render() {

    return (
        <NavApp />
    );
  }
}


