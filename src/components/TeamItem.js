import React from 'react';
import { Text, View} from 'react-native';
import {Button } from 'react-native-elements';

const TeamItem = ({team}) => {
  return (
    <View style={styles.buttonStyle}>
      <Button
      raised
      buttonStyle={{backgroundColor: team.buttonColor, borderRadius: 5}}
      textStyle={{textAlign: 'center', fontFamily: 'Arial',
    fontWeight: '500'}}
      title={team.name.toUpperCase()}
    />
    </View>
  );
};

const styles = {
  buttonStyle: {
    paddingTop: 10
  }
};

export default TeamItem;
