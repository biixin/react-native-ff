import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import MainTab from './src/navigators/MainTab';
import MainStack from './src/navigators/MainStack';
import HomeStack from './src/navigators/HomeStack';
import store from './src/Store';


function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        
        <MainTab />
        {/* <MainStack /> */}
      </NavigationContainer>
    </Provider>
  );
}

export default App

{/* <MainStack /> */}
