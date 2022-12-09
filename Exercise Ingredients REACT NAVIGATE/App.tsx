import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import MainTab from './src/navigators/MainTab';
import MainStack from './src/navigators/MainStack';
import HomeStack from './src/navigators/HomeStack';


function App() {
  return (
    <NavigationContainer>
        
        <MainTab />
        {/* <MainStack /> */}
    </NavigationContainer>
  );
}

export default App

{/* <MainStack /> */}
