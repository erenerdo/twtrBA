import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import Button from 'react-native-elements';
import TweetItem from './TweetItem';
import TweetSection from './TweetSection';

export default class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }
  componentDidMount(filter) {
    const { player } = this.props.navigation.state.params;
    const formattedName = this.underName(player);
    if (!filter) filter = 'recent';

    axios.get(`http://localhost:3000/${formattedName}/${filter}`)
      .then(res => {
        return res.data.statuses;
      })
      .then(data => {
        console.log('got data')
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
        <View style={{
          borderBottomWidth: 1,
          padding: 5,
          backgroundColor: `${buttonColor}`,
          justifyContent: 'flex-start',
          flexDirection: 'row',
          borderColor: '#ddd',
          position: 'relative'
        }}>
          <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => {
            if (this.state.filter !== 'popular') {
              this.componentDidMount('popular');
            }
          }}>
          <Text style={styles.optionTextStyle}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => {
            if (this.state.filter !== 'popular') {
              this.componentDidMount('recent');
            }
          }}>
          <Text style={styles.optionTextStyle}>Recent</Text>
          </TouchableOpacity>
        </View>
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
  },
  touchableStyle: {
    marginRight: 20,
    marginLeft: 20
  },
  optionTextStyle: {
    fontWeight: '600',
    fontSize: 17,
    color: 'white'
  }
};
