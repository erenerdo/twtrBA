import React from 'react';
import { Text, View, Image } from 'react-native';

const TweetItem = (props) => {
  console.log(props.tweet.user.profile_image_url);
  return (
    <View style={styles.itemStyles}>
      <View>
        <Image source={{ uri: props.tweet.user.profile_image_url }} style={styles.imgStyle} />
        <Text style={styles.userNameStyles}>{props.tweet.user.name}</Text>
        <Text style={styles.screenNameStyles}>@{props.tweet.user.screen_name}</Text>
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
    fontSize: 20,
    fontFamily: 'Helvetica Neue'
  },
  screenNameStyles: {
    fontSize: 17,
    fontFamily: 'Helvetica Neue'
  },
  tweetTextStyles: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue'
  },
  imgStyle: {
    height: 1,
    width: 1
  },
  tweetViewStyles: {
    marginTop: 3,
    marginLeft: 10
  }
};

export default TweetItem;
