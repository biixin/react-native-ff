import React from 'react'
import {Image} from 'react-native'
import {BottomTabNavigationEventMap, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TabHomeScreen from './../pages/TabHomeScreen';
import TabAboutScreen from './../pages/TabAboutScreen';
import TabConfigScreen from './../pages/TabConfigScreen';
import CustomTabBar from './../components/CustomTabBar';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { BottomTabDescriptorMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import TabBarIcon from '../components/TabBarIcon';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();


export default () => {
    return (
        <Tab.Navigator
            screenOptions={({route})=>({
                headerShown: false,
                // tabBarVisible: false, //aparecer as tab
                //tabBarLabel:'', // titulo das tab

                tabBarIcon: ({focused}) => <TabBarIcon route={route.name}/>
            })}
            // screenOptions={{
            //     activeTintColor: 'blue',
            //     activeBackgroundColor: 'gray',
            //     labelStyle:{
            //         fontSize: 13
            //     },
            //     keyboardHidesTabBar: true, //esconder tab ao abrir keyboard
                

            // }}
            // lazy={true} // carregar paginas na memoria apenas ao abrir
            //tabBar={({state, descriptors, navigation }) => <CustomTabBar state={state} navigation={navigation} descriptors={descriptors} />} // renderiza componente na tab bar para personalizacao propria
            initialRouteName="TabHome"
        >
            <Tab.Screen name='TabAbout' component={TabAboutScreen} options={{tabBarLabel:'About'}} />
            <Tab.Screen name='TabHome' component={HomeStack} options={{tabBarLabel:'Home'}} />
            <Tab.Screen name='TabConfig' component={TabConfigScreen} options={{tabBarLabel:'Config'}} />

        </Tab.Navigator>
    )
}