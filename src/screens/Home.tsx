import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {NavBar} from '../components/NavBar';
import {Header} from '../components/Header';
import {Carousel} from '../components/Carousel';
import {MenuIcon} from '../assets/icons/menu';

const backgroundImage = require('../assets/images/background.png');

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              marginTop: 40,
              justifyContent: 'flex-end',
              flexDirection: 'row',
              paddingRight: 24,
            }}>
            <MenuIcon />
          </View>
          <Header />
          <Carousel />

          <Text
            style={{
              fontSize: 16,
              color: '#bcbbb9',
              marginTop: 67,
              textAlign: 'center',
            }}>
            Featuring the Industries Top Brands
          </Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
