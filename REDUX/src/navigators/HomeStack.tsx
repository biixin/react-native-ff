import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabHomeScreen from './../pages/TabHomeScreen';
import TabHome2Screen from './../pages/TabHome2Screen';
import { propsMainNavigationStack } from '../types/mainStackType';


const MainStack = createStackNavigator();
//propsMainNavigationStack
// declare global {
//     namespace ReactNavigation {
//         interface RootParamList extends propsMainNavigationStack {}
//     }
// }

export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="TabHomeScreen" component={TabHomeScreen} />
        <MainStack.Screen name="TabHome2Screen" component={TabHome2Screen} />
    </MainStack.Navigator>
)