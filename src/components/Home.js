import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements';



const Home = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#0C459C' }}>
      <View style={styles.welcomeViewStyles}>
        <Text style={styles.welcomeTextStyles}>Welcome to twtrBA</Text>
      </View>
      <View style={styles.infoViewStyles}>
        <Text style={styles.infoTextStyles}>
          The dopest place to see what people are tweeting about the NBA
        </Text>
      </View>

      <View style={styles.imgViewStyle}>
        <Image
          style={styles.imgStyle}
          source={require('../../assets/twitternba.jpg')}
        />
      </View>
      <View style={styles.buttonStyle}>
        <SocialIcon
          title='View Teams'
          button
          type='twitter'
          onPress={() => {
            navigation.navigate('Teams');
          }} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  welcomeTextStyles: {
    fontSize: 35,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  welcomeViewStyles: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  imgStyle: {
    width: 200,
    height: 200,
  },
  imgViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 50,
    marginBottom: 50
  },
  buttonStyle: {
    paddingBottom: 150,
  },
  infoViewStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    paddingBottom: 20
  },
  infoTextStyles: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF'
  }
});

export default Home;
