import React from 'react'
import {  TextInput, StyleSheet } from 'react-native'

const Input = ({customStyle , ...otherProperties}) => {
    return (
        <TextInput  style={{...styles.inputStyles , ...customStyle}} {...otherProperties}></TextInput>
    )
}

const styles = StyleSheet.create({
    inputStyles : {
        height: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})

export default Input
