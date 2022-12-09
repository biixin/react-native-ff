import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';

type Nav = {
    navigate: (v: string) => void;
}

function HomeScreen() {
    const [name, setName] = useState('')

    const navigation = useNavigation();

    const handleSendButton = () => {
        navigation.navigate('About', {name})
    }

    return (
        <View style={styles.container}>
            <Text>Tela HOME {name}</Text>
            <TextInput 
            style={styles.input} 
            value={name}
            onChangeText={t=>setName(t)}
            />

            <Button title="Enviar" onPress={handleSendButton}/>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        width: 250,
        padding:10,
        fontSize:15,
        backgroundColor:'#EEE'
    }
})