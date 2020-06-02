import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGame = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const textChangeHandler = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game !</Text>
        <Card style={{ maxWidth: '80%', width: 300, alignItems: 'center' }}>
          <Text> Select a number </Text>
          <Input
            value={enteredValue}
            onTextChange={textChangeHandler}
            customStyle={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
          ></Input>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Button color={Colors.secondary} title="Reset" onPress={() => {}}></Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button color={Colors.primary} title="Confirm" onPress={() => {}}></Button>
            </View>
          </View>
        </Card>
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
});
