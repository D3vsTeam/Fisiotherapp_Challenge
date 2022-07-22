import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

import Person from "../../assets/person.png";
import { Container, ButtonStyled, Title, Subtile } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const openExercise = () => {
    navigation.navigate('Exercise')
  }

  return (
    <Container>
      <Image source={Person} />
      <Title>Hey, Loreona!</Title>
      <Subtile>Let's start your treatment</Subtile>
      <ButtonStyled title='start' onPress={openExercise} />
    </Container>
  );
}

export default Home;