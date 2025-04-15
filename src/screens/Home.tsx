import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuIcon} from '../assets/icons/menu';
import {Carousel} from '../components/Carousel';
import {Header} from '../components/Header';
import {CarouselBrands} from '../components/CarouselBrands';



const backgroundImage = require('../assets/images/background.png');

const Home = () => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            marginTop: statusBarHeight + 8,
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
        <CarouselBrands />
      </ScrollView>
    </ImageBackground>
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
