import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import Header from 'react-native-elements';
import TweetItem from './TweetItem';

export default class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }
  componentDidMount() {
    const { player } = this.props.navigation.state.params;
    const formattedName = this.underName(player);

    axios.get(`http://localhost:3000/${formattedName}`)
      .then(res => {
        return res.data.statuses;
      })
      .then(data => {
        this.setState({ tweets: data });
      })
      .catch(console.error);
  }
  render() {
    const { player, buttonColor } = this.props.navigation.state.params;

    if (this.state.tweets.length === 0) {
      return (
        <View>
          <LoadingScreen />
        </View>
      );
    }
    return (
      <View style={{backgroundColor: buttonColor}}>
        <View style={styles.playerViewStyles}>
          <Text style={styles.playerTextStyles}> {player} </Text>
        </View>
        <ScrollView>
        {
          this.state.tweets.map(tweet => {
            return (<TweetItem key={tweet.id} tweet={tweet} />);
          })
        }
        </ScrollView>
      </View>
    );
  }

  underName(name) {
    return name.split(' ').join('_');
  }
}

const styles = {
  nameStyle: {
    fontWeight: '200',
    fontSize: 500,
    padding: 10
  },
  playerTextStyles: {
    fontSize: 35,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  playerViewStyles: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }
}
