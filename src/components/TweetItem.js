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

const dateify = (tweet) => {
  const dateArr = tweet.created_at.split(' ');
  const time = dateArr[3].split(':');
  let timeOf = '';
  time[0] = +time[0] - 5;

  const dateShift = {
    Mon: 'Sun',
    Tue: 'Mon',
    Wed: 'Tue',
    Thu: 'Wed',
    Fri: 'Thu',
    Sat: 'Fri',
    Sun: 'Sat'
  };

  if (time[0] < 5) {
    dateArr[0] = dateShift[dateArr[0]];
    dateArr[2] = +dateArr[2] - 1;
  }

  if (time[0] === 0) {
    time[0] = 12;
  } else if (time[0] < 0) {
    time[0] = +time[0] + 24;
  }
  if (+time[0] > 12) {
    time[0] = +time[0] - 12;
    timeOf = ' PM';
  }
  else {
    timeOf = ' AM';
  }


  // console.log(time.join(':') + timeOf );
  return `${dateArr[0]} ${time.join(':') + timeOf} ${dateArr[1]} ${dateArr[2]} ${dateArr[dateArr.length - 1]}`;
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
      <View style={{ marginLeft: 10, marginTop: 10, marginBottom: 5 }}>
        <Text>{`Favorites: ${props.tweet.favorite_count}     Retweets: ${props.tweet.retweet_count}`}</Text>
      </View>
      <View style={{ marginLeft: 10, marginTop: 1, marginBottom: 5 }}>
        <Text>{dateify(props.tweet)}</Text>
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
    marginBottom: 15,
    borderRadius: 10
  },
  userNameStyles: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700'
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
