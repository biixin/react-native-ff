import React, {useLayoutEffect, useState} from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {
    route: string
}

function TabBarIcon({route}: Props) {

    let imgSource = null;
    let badgeCount = 0;

        switch(route) {
            case 'TabHome':
                imgSource = require('../images/home.png')
            break;
            case 'TabAbout':
                imgSource = require('../images/interface.png')
            break;
            case 'TabConfig':
                imgSource = require('../images/interface.png')
            break;
        }

        return (
            <View>
                <Image source={imgSource} style={styles.icon} />
                {badgeCount > 0 &&
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{badgeCount}</Text>
                    </View>
                }
            </View>
        )
            
}

export default TabBarIcon;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'gray'
    },
    icon:{
        width:24,
        height:24,
    },
    badge: {
        position:'absolute',
        right: -6,
        top: -3,
        backgroundColor:'gray',
        height:15,
        width:15,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    badgeText:{
        color:'#FFF',
        fontSize: 10
    }
})