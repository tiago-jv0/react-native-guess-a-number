import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';

import StartGame from './screens/StartGame';
import Game from './screens/Game';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={startGameHandler}></StartGame>;

  if(userNumber) {
    content= <Game userChoice={userNumber}></Game>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
