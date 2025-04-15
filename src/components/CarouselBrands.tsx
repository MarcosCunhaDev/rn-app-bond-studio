import React, {useEffect, useRef} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';

const {width} = Dimensions.get('window');

const images = [
  {id: '1', uri: require('../assets/images/logos/HVL-logo.png')},
  {id: '2', uri: require('../assets/images/logos/JMV-logo.png')},
  {id: '3', uri: require('../assets/images/logos/Kohler-logo.png')},
  {id: '4', uri: require('../assets/images/logos/Toto-logo.png')},
];

const SPACING = 10;
const ITEM_WIDTH = width * 0.8 + SPACING;
const SPEED = 0.5; // pixels per frame (60fps = ~30px/s)

export const SmoothCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<FlatList>(null);
  const offset = useRef(0);
  const infiniteList = [...images, ...images, ...images]; // Extend for illusion

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      offset.current += SPEED;
      if (scrollRef.current) {
        scrollRef.current.scrollToOffset({
          offset: offset.current,
          animated: false,
        });
      }

      // Reset offset to loop infinitely
      if (offset.current >= ITEM_WIDTH * images.length * 2) {
        offset.current = ITEM_WIDTH * images.length;
        if (scrollRef.current) {
          scrollRef.current.scrollToOffset({
            offset: offset.current,
            animated: false,
          });
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <FlatList
      ref={scrollRef}
      data={infiniteList}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      snapToInterval={null}
      bounces={false}
      contentContainerStyle={{paddingHorizontal: SPACING / 2}}
      renderItem={({item}) => (
        <View style={styles.imageContainer}>
          <Image source={item.uri} style={styles.image} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: width * 0.4,
    marginHorizontal: SPACING / 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    // width: '100%',
    // height: 200,
  },
});
