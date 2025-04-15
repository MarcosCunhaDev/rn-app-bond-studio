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
    marginTop: 40,
    marginBottom: 36,
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  textContainer: {
    paddingLeft: 18,
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    color: '#848280',
  },
  subtitle: {
    fontSize: 24,
    color: '#1D1C19',
  },
});
