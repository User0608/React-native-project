'use strict'
import React, { Component } from 'react';

import {
  Text,
    View,
    TouchableHighlight,
    Alert,
    StyleSheet
} from 'react-native';

class heroesView extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Soy el componente heroes</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    },
    title:{
        fontSize: 25,
        marginTop: 100
    }
})


module.exports = heroesView;

