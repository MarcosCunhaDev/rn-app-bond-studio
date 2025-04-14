import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const profileImg = require('../assets/images/profile.png');

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImg} source={profileImg} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          Georgia
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          Let's start designing
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 58,
    marginTop: 127,
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 24,
  },
  profileContainer: {},
  profileImg: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
  },
  textContainer: {
    paddingLeft: 18,
    // flex: 1,
    // borderWidth: 1,
  },
  title: {
    flex: 1,
    color: '#848280',
    fontSize: 24,
    // lineHeight: 32,
  },
  subtitle: {
    fontSize: 24,
    color: '#1D1C19',
  },
});
