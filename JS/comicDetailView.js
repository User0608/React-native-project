'use strict'
import React, { Component } from 'react'

import {
  Text,
    View,
    TouchableHighlight,
    Alert,
    StyleSheet,
    ListView,
    Image
} from 'react-native'

class comicDetailView extends Component {
    constructor(props){
        super(props)
        this.passProps = this.props.route.passProps
        this.modified = this.passProps.comic.modified.slice(0,10)
    }
    render(){
        return(
        <View style={styles.container}>
            <Image source={{uri: this.passProps.comic.thumbnail.path+'.jpg'}} style={styles.image}></Image>
            <Text style={styles.title}>{this.passProps.comic.name}</Text>
            <Text style={styles.description}>
                {this.passProps.comic.description}
            </Text>
            <Text style={styles.description}>Disponibles: {this.passProps.comic.comics.available}</Text>
            <Text style={styles.modified}>Modificado: {this.modified}</Text>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 63,
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    title:{
        fontSize: 23,
        color: '#007AFF'
    },
    description:{
        marginTop: 10,
        fontSize: 16
    },
    modified:{
        marginTop: 10,
        fontSize: 16
    },
    image: {
        alignSelf: 'stretch',
        height: 300
    }
})

module.exports = comicDetailView