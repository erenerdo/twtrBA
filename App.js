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
    backgroundColor: '#00aced',
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
      headerTitle: 'Teams',
      headerStyle: styles.header
    }
  },
  Players: {
    screen: Players,
    navigationOptions: {
      headerTitle: 'Players',
      headerStyle: styles.header
    }
  },
  Tweets: {
    screen: Tweets,
    navigationOptions: {
      headerTitle: 'Tweets',
      headerStyle: styles.header
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


