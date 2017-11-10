import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ActivityIndicatorExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true
    };
  }

  componentDidMount() {
    // setTimeout(() => this.setState({
    //   animating: false
    // }), 30000);
  }
  render() {
    const animating = this.state.animating;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color='black'
          size="large"
          style={styles.activityIndicator} />
      </View>
    );
  }
}
export default ActivityIndicatorExample

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
})
