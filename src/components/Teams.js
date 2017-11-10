import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NBA from '../TeamData';
import TeamItem from './TeamItem';

const Teams = ({ navigation }) => {
  return (
    <View style={styles.teamsStyle}>
      <ScrollView>
        <View>
        {
          NBA.map(team => {
            return (<TeamItem team={team} key={team.name} navigation={navigation} />);
          })
        }
        </View>
      </ScrollView>
    </View>
  );
}


const styles = {
  teamsStyle: {
    backgroundColor: 'white'
  }
};

export default Teams;
