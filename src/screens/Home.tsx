import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavBar} from '../components/NavBar';
import {Header} from '../components/Header';
import {Carousel} from '../components/Carousel';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
      <Carousel />
      <NavBar />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
