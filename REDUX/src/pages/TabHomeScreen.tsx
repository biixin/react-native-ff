import React from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {connect} from 'react-redux'


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
type reducer = {
    name: string,
    email: string
}

const mapStateToProps = (state: { reducer: { name: any; email: any; }; }) => {
    return {
        name: state.reducer.name,
        email:state.reducer.email
    };
}

const mapDispatchToProps = () => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps) (TabHomeScreen);

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