import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.primary,
    height: 90,
    paddingTop: 36,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 18,
    color: 'black',
  },
});

export default Header;
