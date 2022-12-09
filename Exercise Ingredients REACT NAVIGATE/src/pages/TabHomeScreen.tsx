import React, {useLayoutEffect, useState} from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
import Listagem from '../components/Listagem';
import lista from '../lista';


type Nav = {
    navigate: (v: string) => void;
}

type List = {
    text: string
}

function TabHomeScreen() {

    const navigation = useNavigation();


    const handlePage = () => {
        navigation.navigate('TabHome2Screen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>TAB HOME</Text>
            <Button title="Ir para tela 2" onPress={handlePage}/>
        </SafeAreaView>
    )
}

export default TabHomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
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
    },
    flatlist: {
        flex:1,
        width:'100%',
        height:'100%'
    },
    view: {
        flexDirection: 'row',
    }
})