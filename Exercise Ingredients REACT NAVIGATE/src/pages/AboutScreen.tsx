import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'

type Nav = {
    navigate: (v: string) => void;
}

function AboutScreen() {
    const navigation = useNavigation();
    const route = useRoute<any>();

    const name = route?.params?.name as any == 
    '' ? 
    'Visitante' : 
    route?.params?.name 

    const handleBack = () => {
        navigation.goBack()
        // navigation.popToTop(); // Primeira pagina
    }

    return (
        <View style={styles.container}>
            <Text>Tela de Sobre: {name}</Text>
            <Button title="Voltar" onPress={handleBack}/>
        </View>
    )
}

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})