import React, {useLayoutEffect, useState} from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
import Listagem from './../components/Listagem';
import lista from '../lista';


type Nav = {
    navigate: (v: string) => void;
}

type List = {
    text: string
}

function HomeScreen() {
    const [items, setItems] = useState(lista)
    const [item, setItem] = useState('')


    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft:()=><Text style={styles.headerText}>Exercicio</Text>,
        title: ''
      })
    }, [])

    const handleAdd = () => {
        let newItem = [...items]
        newItem.push({
            id:Math.floor(Math.random() * 65536),
            task: item,
            done: false
        })
        setItems(newItem)
    }
    const handleDel = () => {
        setItems(lista)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text} >{item}</Text>
            <TextInput style={styles.input} 
                value={item}
                onChangeText={(e:string)=>setItem(e)}
                placeholder="Digite um ingrediente"
            />
            <View style={styles.view}>
                <Button title="Deletar" onPress={()=>handleDel()}/>
                <Button title="Adicionar" onPress={()=>handleAdd()}/>
            </View>
            
            <FlatList style={styles.flatlist} 
                data={items}
                renderItem={({item})=><Listagem data={item}/>}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

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