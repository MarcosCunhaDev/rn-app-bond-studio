import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageSourcePropType,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const {width: screenWidth} = Dimensions.get('window');
const PEEK_WIDTH = 40;
const BLUR_AMOUNT = 4;

interface CarouselItem {
  id: number;
  image: ImageSourcePropType;
  title?: string;
  subtitle?: string;
}

const carouselData: CarouselItem[] = [
  {id: 1, image: require('../assets/images/first.png')},
  {id: 2, image: require('../assets/images/first.png')},
  {id: 3, image: require('../assets/images/first.png')},
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollRef = useRef<ScrollView>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //   const offset = event.nativeEvent.contentOffset.x;
  //   setScrollPosition(offset);
  //   const index = Math.round(offset / (screenWidth - PEEK_WIDTH));
  //   setCurrentIndex(index);
  // };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / (screenWidth - PEEK_WIDTH));
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const getItemWidth = (index: number) => {
    return index === carouselData.length - 1
      ? screenWidth
      : screenWidth - PEEK_WIDTH;
  };

  const isItemActive = (index: number) => {
    const itemStart = index * (screenWidth - PEEK_WIDTH);
    const itemEnd = itemStart + (screenWidth - PEEK_WIDTH);
    return scrollPosition >= itemStart - 10 && scrollPosition < itemEnd - 10;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        decelerationRate="fast"
        snapToInterval={screenWidth - PEEK_WIDTH}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}>
        {carouselData.map((item, index) => {
          const active = isItemActive(index);

          return (
            <View
              key={item.id}
              style={[styles.slide, {width: getItemWidth(index)}]}>
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
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
  },
  scrollContent: {
    // paddingRight: PEEK_WIDTH,
  },
  slide: {
    width: screenWidth,
    height: 530,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
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
    width: PEEK_WIDTH * 2, // Wider than container to create parallax effect
    height: '80%',
    borderRadius: 8,
    opacity: 0.8,
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 8,
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
