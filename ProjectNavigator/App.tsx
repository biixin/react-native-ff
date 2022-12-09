import React from 'react';
import {SafeAreaView, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack'

function App() {
  return (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
  );
}

export default App

