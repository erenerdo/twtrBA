import React from 'react';
import { Text, View, ScrollView } from 'react-native';

const Players = (props) => {
  const {name, players, buttonColor, backgroundColor} = props.navigation.state.params.team;
  return (
    <View>
    {
      players.map(player => {
        return (<Text key={player}>{player}</Text>);
      })
    }
    </View>
  );
};

export default Players;
