import {Text, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {NavBar} from '../components/NavBar';
import {Header} from '../components/Header';
import {Carousel} from '../components/Carousel';

const backgroundImage = require('../assets/images/background.png');

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Header />
        <Carousel />
        {/* <NavBar /> */}
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
