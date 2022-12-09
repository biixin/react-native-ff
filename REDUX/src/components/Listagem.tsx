import React, {useLayoutEffect, useState} from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
type data = {
    id: number
    task: string,
    done: boolean
}

type Props = {
    data: data
}

function Listagem({data}: Props) {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text style={styles.text}>{data.task}</Text>
        </SafeAreaView>
    )
}

export default Listagem;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000',
        alignItems:'center'
        
    },
    text: {
        color:'white'
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