import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, Text, View, Button } from 'react-native';

import Person from "../../assets/person.png";

const Home: React.FC = () => {
  const navigation = useNavigation();

  const openExercise = () => {
    navigation.navigate('Exercise')
  }

  return (
    <View style={{ flex:1, justifyContent: 'center', padding: 30}}>
      <Image source={Person} style={{marginBottom: 15}} />
      <Text style={{fontSize: 42, textAlign: 'center', marginBottom: 25}}>Hey, Loreona!</Text>
      <Text style={{fontSize: 32, textAlign: 'center', marginBottom: 40}}>Let's start your treatment</Text>
      <Button title='Start treatment' color='#5B3FFF' onPress={openExercise}/>
    </View>
  );
}

export default Home;