import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import PlayerItem from './PlayerItem';

const Players = (props) => {
  const {name, players, buttonColor, backgroundColor} = props.navigation.state.params.team;

  return (
    <ScrollView style={{backgroundColor}}>
    {
      players.map(player => {
        return (<PlayerItem key={player} player={player} buttonColor={buttonColor} />);
      })
    }
    </ScrollView>

  );
};


export default Players;
