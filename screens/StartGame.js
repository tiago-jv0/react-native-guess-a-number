import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

import Colors from '../constants/colors';

const StartGame = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const numberInputHandler = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };
  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text> You selected: {selectedNumber}</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={props.onStartGame(selectedNumber)}></Button>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game !</Text>
        <Card style={{ maxWidth: '80%', width: 300, alignItems: 'center' }}>
          <Text> Select a number </Text>
          <Input
            value={enteredValue}
            onChangeText={numberInputHandler}
            customStyle={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
          ></Input>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Button color={Colors.secondary} title="Reset" onPress={resetInputHandler}></Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button color={Colors.primary} title="Confirm" onPress={confirmInputHandler}></Button>
            </View>
          </View>
        </Card>

        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },

  input: {
    width: 70,
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  buttonContainer: {
    width: '45%',
  },

  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
