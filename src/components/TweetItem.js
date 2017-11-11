import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import TweetSection from './TweetSection';

const urlify = (tweet) => {
  if (tweet.text.slice(0, 3) === 'RT ') {
    return `https://twitter.com/${tweet.entities.user_mentions[0].screen_name}/status/${tweet.id_str}`;
  } else {
    return `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
  }
};

const TweetItem = (props) => {
  return (
    <View style={styles.itemStyles}>
      <TweetSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image source={{ uri: props.tweet.user.profile_image_url }} style={styles.imgStyle} />
        </View>

        <View style={styles.headerContentStyles}>
          <Text style={styles.userNameStyles}>{props.tweet.user.name}</Text>
          <Text style={styles.screenNameStyles}>@{props.tweet.user.screen_name}</Text>
        </View>
      </TweetSection>

      <View style={styles.tweetViewStyles}>
        <Text style={styles.tweetTextStyles}>{props.tweet.text}</Text>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(urlify(props.tweet))} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
          View On Twitter
      </Text>
      </TouchableOpacity>
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
    fontSize: 16,
    fontFamily: 'Helvetica Neue'
  },
  screenNameStyles: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue'
  },
  tweetTextStyles: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue'
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
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
  },
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default TweetItem;
