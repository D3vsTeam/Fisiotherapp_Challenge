import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import Exercise from './src/pages/exercise/index'

export default function App() {
  return (
    <View>
        <Exercise/>
    </View>
  );
}

