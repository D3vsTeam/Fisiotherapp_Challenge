import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Exercise from '../pages/exercise';
import Home from '../pages/Home';

const { Screen, Navigator } = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Screen
          name='Exercise'
          component={Exercise}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;