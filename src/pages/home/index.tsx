import React from 'react';
import { Button, ImageBackground, Text, View } from 'react-native';

// import { Container } from './styles';

import Person from "../../assets/person.png";

const Home: React.FC = () => {
  return (
    <View>
      <ImageBackground source={Person} />
      <Text>Hey, Loreona!</Text>
      <Text></Text>
      <Button />
    </View>
  );
}

export default Home;