import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';


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
    console.log(formattedName);
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
    const { player } = this.props.navigation.state.params;
    console.log('rendered');
    if (this.state.tweets.length === 0) {
      return (
        <View>
          <Text> Loading tweets regarding {player} </Text>
        </View>
      );
    }
    return (
      <ScrollView>
        <Text> Tweets about {player} </Text>
        <Text> {this.state.tweets[0].text} </Text>
      </ScrollView>
    );
  }

  underName(name) {
    return name.split(' ').join('_');
  }
}
