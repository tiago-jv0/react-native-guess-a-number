import React, { useState } from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rdnNum = Math.floor(Math.random() * (max - min) + min);

  if (rdnNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rdnNum;
};

const Game = (props) => {
  const [currentGuess, setCurrenGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonsContainer}>
          <Button title='LOWER' onPress={() => {}}></Button>
          <Button title='GREATER' onPress={() => {}}></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },

    buttonsContainer : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default Game;
