import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NBA from '../TeamData';
import TeamItem from './TeamItem';

export default class Teams extends React.Component {

  render() {
    return (
      <View style={styles.teamsStyle}>
        <ScrollView>
          {
            NBA.map(team => {
              return (<TeamItem team={team} key={team.name} />);
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  teamsStyle: {
    backgroundColor: '#00aced'
  }
};

