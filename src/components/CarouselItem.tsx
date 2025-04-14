import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {RoundedButton} from './Button';

const {width: screenWidth} = Dimensions.get('window');
const PEEK_WIDTH = 40;
const BLUR_AMOUNT = 4;

interface CarouselItemP {
  item: any;
  currentIndex: number;
  index: number;
  getItemWidth: (value: number) => number;
}

export const CarouselItem = ({
  item,
  currentIndex,
  index,
  getItemWidth,
}: CarouselItemP) => {
  return (
    <View key={item.id} style={[styles.slide, {width: getItemWidth(index)}]}>
      {index !== currentIndex ? (
        <View style={styles.blurView}>
          <BlurView
            style={styles.blurImage}
            blurType="light"
            blurAmount={BLUR_AMOUNT}
            reducedTransparencyFallbackColor="white">
            <Image source={item.image} style={styles.blurImage} />
          </BlurView>
        </View>
      ) : (
        <Image source={item.image} style={styles.image} />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 24,
          left: 24,
        }}>
        <View style={{gap: 2}}>
          <Text style={{fontWeight: 300, fontSize: 32, color: '#FFFFFF'}}>
            {item.title}
          </Text>
          <Text style={{fontWeight: 300, fontSize: 16, color: '#FFFFFF'}}>
            {item.subtitle}
          </Text>
        </View>
        <View
          style={{
            marginTop: 22,
            flexDirection: 'row',
            gap: 10,
          }}>
          <RoundedButton
            onPress={() => {}}
            title="Apply to my room"
            backgroundColor="#F1F0ED"
            textColor="#31312B"
          />
          <RoundedButton
            onPress={() => {}}
            title="Details"
            textColor="#FFFFFF"
            borderColor="#FFFFFF52"
            backgroundColor="transparent"
            borderWidth={1}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {},
  slide: {
    width: screenWidth,
    height: 530,
    justifyContent: 'center',
    alignItems: 'center',
  },
  peekContainer: {
    position: 'absolute',
    right: -PEEK_WIDTH,
    width: PEEK_WIDTH,
    height: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  peekImage: {
    width: PEEK_WIDTH * 2,
    height: '80%',
    borderRadius: 8,
    opacity: 0.8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    marginLeft: 3,
  },
  blurImage: {
    width: '100%',
    height: '100%',
  },
});
