import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
  return <View style={{ ...styles.Card, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  Card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
