import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageSourcePropType,
} from 'react-native';
import {CarouselItem} from './CarouselItem';

const {width: screenWidth} = Dimensions.get('window');
const PEEK_WIDTH = 30;

export interface CarouselItemI {
  id: number;
  image: ImageSourcePropType;
  title?: string;
  subtitle?: string;
}

const carouselData: CarouselItemI[] = [
  {
    id: 1,
    image: require('../assets/images/image1.jpeg'),
    title: 'Harvest',
    subtitle: 'Bold design meets timeless beauty',
  },
  {
    id: 2,
    image: require('../assets/images/image2.png'),
    title: 'Stoneworks',
    subtitle: 'Bold design meets timeless beauty',
  },
  {
    id: 3,
    image: require('../assets/images/image3.png'),
    title: 'Alabaster',
    subtitle: 'Bold design meets timeless beauty',
  },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollRef = useRef<ScrollView>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

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
          return (
            <CarouselItem
              item={item}
              currentIndex={currentIndex}
              getItemWidth={getItemWidth}
              index={index}
              key={index}
            />
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
});
