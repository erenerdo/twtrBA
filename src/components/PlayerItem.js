import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const PlayerItem = (props) => {
  const { player, buttonColor } = props;
  console.log(player);
  return (
    <View style={styles.buttonStyle}>
      <Button
        raised
        buttonStyle={{ backgroundColor: buttonColor, borderRadius: 3 }}
        textStyle={{
          textAlign: 'center', fontFamily: 'Arial',
          fontWeight: '500'
        }}
        title={player.toUpperCase()}
        onPress={() => {
          console.log('pressed');
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


export default PlayerItem;
