import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button, Image } from 'react-native';
import Person from "../../assets/hand.png";

export default function Exercise() {
  return (
    <View>
        <Image source={Person} />
        <Text>Fechar e Abrir as mãoes</Text>
        <Button title='Feito!'/>
    </View>
  );
}

