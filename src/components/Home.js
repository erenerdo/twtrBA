import React from 'react';
import { Text, View } from 'react-native';

const Home = ({navigation}) => {
  return (
  <View>
    <Text>Welcome to twtrBA!!</Text>
    <Text onPress={() => {
      navigation.navigate('Teams');}
    }> Teams </Text>
  </View>
);
}

export default Home;
