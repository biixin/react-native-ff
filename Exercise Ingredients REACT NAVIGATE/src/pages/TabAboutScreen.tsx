import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'

type Nav = {
    navigate: (v: string) => void;
}

function TabAboutScreen() {


    return (
        <View style={styles.container}>
            <Text>TAB ABOUT</Text>
        </View>
    )
}

export default TabAboutScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})