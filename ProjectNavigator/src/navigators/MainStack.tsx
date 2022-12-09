import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './../pages/HomeScreen';
import AboutScreen from './../pages/AboutScreen';
import { propsMainNavigationStack } from '../../types/mainStackType';

const MainStack = createStackNavigator<propsMainNavigationStack>();

declare global {
    namespace ReactNavigation {
        interface RootParamList extends propsMainNavigationStack {}
    }
}

export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="About" component={AboutScreen} />
    </MainStack.Navigator>
)