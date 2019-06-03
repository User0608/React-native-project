'use strict'

import React, { Component } from 'react'

import {
    Text,
    View,
    TouchableHighlight,
    Alert,
    StyleSheet,
    Image
} from 'react-native'

class loginView extends Component {
    render(){
        return(
            <Image  style={styles.container} source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/86/22/ae/8622ae3e39fbb2b2ebf9afa6b12befa5.jpg'}}> 
            <View>  
                <Text style={styles.title}>Superhero</Text> 
                <TouchableHighlight onPress={this.onLogin.bind(this)} style={styles.boton}>
                    <Text style={styles.textoBoton}>Login</Text>
                </TouchableHighlight>
            </View>
            </Image>
        )
    }
    onLogin(){
        Alert.alert(
            'Acceso',
            'Te has logueado en el sistema',
            [
                {
                    text: 'Aceptar',
                    onPress: this.aceptar.bind(this)
                },
                {
                    text: 'Cancelar',
                    onPress: this.cancelar.bind(this)
                }
            ]
        )
    }
    aceptar(){
         this.props.navigator.replace({
            title: 'Dashboard',
            name: 'Dashboard',
            passProps:{}
        })
    }
    cancelar(){
        console.log('Login cancelado')
    }
}

const styles = StyleSheet.create({
    boton:{
        width: 300,
        height: 30,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1
	padding: '1em'
    }, 
    textoBoton: {
        color: 'white'
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 30 
    },
    title:{
        marginTop: 100,
        fontSize: 25,
        textAlign: 'center',
        color: 'red',
        backgroundColor:'rgba(0,0,0,0)' 
    }
})


module.exports = loginView;
