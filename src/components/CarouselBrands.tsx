import React, {useEffect, useRef} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

type CarouselItem = {
  id: string;
  uri: ImageSourcePropType;
};

const {width} = Dimensions.get('window');

const images: CarouselItem[] = [
  {id: '1', uri: require('../assets/images/logos/HVL-logo.png')},
  {id: '2', uri: require('../assets/images/logos/JMV-logo.png')},
  {id: '3', uri: require('../assets/images/logos/Kohler-logo.png')},
  {id: '4', uri: require('../assets/images/logos/Toto-logo.png')},
];

const SPACING = 2;
const ITEM_WIDTH = width * 0.8 + SPACING;
const SPEED = 0.8;

export const CarouselBrands = () => {
  const scrollRef = useRef<FlatList<CarouselItem>>(null);
  const offset = useRef(0);
  const animationFrameId = useRef<number>(0);
  const infiniteList = [...images, ...images, ...images];

  useEffect(() => {
    const animate = () => {
      offset.current += SPEED;

      if (scrollRef.current) {
        scrollRef.current.scrollToOffset({
          offset: offset.current,
          animated: false,
        });
      }

      if (offset.current >= ITEM_WIDTH * images.length * 2) {
        offset.current = ITEM_WIDTH * images.length;
        scrollRef.current?.scrollToOffset({
          offset: offset.current,
          animated: false,
        });
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <FlatList
      ref={scrollRef}
      data={infiniteList}
      keyExtractor={(_, index) => `carousel-item-${index}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      decelerationRate="fast"
      snapToInterval={ITEM_WIDTH}
      contentContainerStyle={styles.contentContainer}
      renderItem={({item}) => (
        <View style={styles.imageContainer}>
          <Image source={item.uri} style={styles.image} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: SPACING / 2,
    marginTop: 20,
  },
  imageContainer: {
    width: width * 0.4,
    marginHorizontal: SPACING / 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {},
});
