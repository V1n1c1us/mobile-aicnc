import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, AsyncStorage, ScrollView } from 'react-native'


import api from '../services/api';
import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function List({ navigation }) {

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs')
            .then((storagedTechs) => {
                const techsArray = storagedTechs.split(',').map(tech => tech.trim())

                setTechs(techsArray)
            })
    }, [])

    function backLogin() {
        AsyncStorage.removeItem('user');
        navigation.navigate('Login');

    }
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={backLogin}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 50,
    },
    button: {
        height: 42,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});