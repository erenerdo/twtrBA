import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const TweetItem = (props) => {
  console.log(props.tweet.user.profile_image_url);
  return (
    <View style={styles.itemStyles}>
      <View style={{flex: 1}}>
        <View>
          <Image source={{ uri: props.tweet.user.profile_image_url }} style={styles.imgStyle} />
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userNameStyles}>{props.tweet.user.name}</Text>
          <Text style={styles.screenNameStyles}>@{props.tweet.user.screen_name}</Text>
        </View>

      </View>
      <View style={styles.tweetViewStyles}>
        <Text style={styles.tweetTextStyles}>{props.tweet.text}</Text>

      </View>
    </View>
  );
};

const styles = {
  itemStyles: {
    backgroundColor: 'white',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15
  },
  userNameStyles: {
    fontSize: 22,
    fontFamily: 'Helvetica Neue'
  },
  screenNameStyles: {
    fontSize: 20,
    fontFamily: 'Helvetica Neue'
  },
  tweetTextStyles: {
    fontSize: 15,
    fontFamily: 'Helvetica Neue'
  },
  imgStyle: {
    height: 50,
    width: 50
  },
  tweetViewStyles: {
    marginTop: 3,
    marginLeft: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  },
  userInfo: {
    marginLeft: 5
  }
};

export default TweetItem;
