import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import Teams from './src/components/Teams';
import Players from './src/components/Players';
import Tweets from './src/components/Tweets';

import axios from 'axios';

const styles = StyleSheet.create({
  welcomeStyle: {
    backgroundColor: '#ffffff'
  },
  textStyle: {
    fontSize: 50
  },
  header: {
    backgroundColor: '#003DA5'
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
  },
  Players: {
    screen: Players,
    navigationOptions: {
      headerTitle: 'Players'
    }
  },
  Tweets: {
    screen: Tweets,
    navigationOptions: {
      headerTitle: 'Tweets'
    }
  }
});

export default class App extends React.Component {

  render() {

    return (
        <NavApp />
    );
  }
}


