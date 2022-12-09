import React, {useLayoutEffect, useState} from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {NavigationHelpers, ParamListBase, TabNavigationState, useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface TabBarProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  }

function CustomTabBar({state, descriptors, navigation}: TabBarProps) {

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                
                let label = route.name;
                if(options.tabBarLabel != undefined) {
                    label = options.tabBarLabel as string;
                } else if (options.title != undefined) {
                    label = options.title;
                }

                const isFocused = state.index === index;

                const handleTabPress = () => {
                    navigation.navigate(route.name);
                }

                if(route.name == 'TabHome') {
                    return (
                        <TouchableHighlight key={index} style={styles.homeTab} onPress={handleTabPress}>
                            <Text style={[styles.label, isFocused?styles.labelFocused:null]}>{label}</Text>
                        </TouchableHighlight>
                    )
                } else {
                    return (
                        <TouchableHighlight key={index} underlayColor='transparent' style={styles.tab} onPress={handleTabPress}>
                            <Text style={[styles.label, isFocused?styles.labelFocused:null]}>{label}</Text>
                        </TouchableHighlight>
                    )
                }
                
            })}
        </View>
    )
}

export default CustomTabBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'gray'
    },
    tab:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
    },
    homeTab: {
        backgroundColor:'#00FF00',
        width: 70,
        height:70,
        justifyContent:'center',
        alignItems:'center',
        marginTop: -20,
        borderRadius: 35
    },
    label: {
        color:'#FF0000',
        fontSize:16
        
    },
    labelFocused: {
        color:'blue',
        fontSize:16
    },
    input: {
        width: '90%',
        fontSize:18,
        backgroundColor:'#DDD',
        margin:10
    },
    headerText: {
        marginLeft: 10
    }
})