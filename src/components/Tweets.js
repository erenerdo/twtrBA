import React, {Component} from 'react';
import { Text, View } from 'react-native';


export default class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }
  componentDidMount() {
    console.log('mounted');
  }
  render () {
    console.log('Tweets', this.props.navigation.state.params.player);
    return (
      <View>
        <Text> Tweets </Text>
      </View>
    );
  }
}
