import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Image, ImageBackground, Text, View } from 'react-native';

import Person from "../../assets/person.png";

const Home: React.FC = () => {
  const navigation = useNavigation();

  const openExercise = () => {
    navigation.navigate('Exercise')
  }

  return (
    <View>
      <Image source={Person} />
      <Text>Hey, Loreona!</Text>
      <Text>Let's start your treatment</Text>
      <Button title='start' onPress={openExercise}/>
    </View>
  );
}

export default Home;