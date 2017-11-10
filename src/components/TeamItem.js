import React from 'react';
import { Text, View} from 'react-native';
import {Button } from 'react-native-elements';

const TeamItem = ({team, navigation}) => {
  return (
    <View style={styles.buttonStyle}>
      <Button
      raised
      buttonStyle={{backgroundColor: team.buttonColor, borderRadius: 3}}
      textStyle={{textAlign: 'center', fontFamily: 'Arial',
    fontWeight: '500'}}
      title={team.name.toUpperCase()}
      onPress={() => {
        navigation.navigate('Players', {team});
      }
      }
    />
    </View>
  );
};

const styles = {
  buttonStyle: {
    padding: 5,
    paddingBottom: 5
  }
};

export default TeamItem;
