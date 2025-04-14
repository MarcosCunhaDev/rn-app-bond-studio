import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {HomeIcon} from '../assets/icons/home';
import {MagicIcon} from '../assets/icons/magic';

const {width} = Dimensions.get('window');
export const NavBar = () => {
  const [activeRoute, setActiveRoute] = useState('Home'); // Initialize with 'Home'

  return (
    <View style={styles.floatingNavbar}>
      <TouchableOpacity
        style={[styles.navItem, activeRoute === 'Home' && styles.activeNavItem]}
        onPress={() => setActiveRoute('Home')}>
        <HomeIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem, activeRoute === 'News' && styles.activeNavItem]}
        onPress={() => setActiveRoute('News')}>
        <MagicIcon fill={'red'} color={'yellow'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingNavbar: {
    flexDirection: 'row',
    backgroundColor: '#1D1C19', // Darker background
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 60,
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    padding: 6,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  navItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20, // Make nav items rounded
    backgroundColor: 'transparent', // Default background
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f1f5f9', // Light text
  },
  activeNavItem: {
    backgroundColor: '#31312B', // Darker background for active item
  },
  activeNavText: {
    color: '#ffffff', // White text for active item
  },
});
