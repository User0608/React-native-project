'use strict'
import React, { Component } from 'react';

import {
  Text,
    View,
    TouchableHighlight,
    Alert,
    StyleSheet,
    ListView,
    Image
} from 'react-native';

var Crypto = require('crypto-js')
var ComicDetail = require('./comicDetailView');

const REQUEST_URL ="http://gateway.marvel.com:80/v1/public/characters"

class dashboardView extends Component {
    constructor(props){
        super(props);
        this.timestamp = 1;
        this.public_key = '45ecdcaeb78978d778efd8847d848127';
        this.private_key =  'eeceb71751be29a622067d9929cb6ae3fab323e3';
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2
            }),
            loaded: false 
        }
    }
    
    componentDidMount(){
        this.fetchData(); 
    }
    fetchData(){
        var hash = Crypto.MD5(this.timestamp + this.private_key + this.public_key);
        fetch(REQUEST_URL+'?ts='+this.timestamp+'&apikey='+this.public_key+'&hash='+hash).then((response) => response.json()).then((responseData) => this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
            loaded: true
        }))
    }
    
    renderLoadingView(){
        return(
        <View style= {styles.container}>
            <Text style={{}}>Cargando comics....</Text>
        </View>)
    }
    onComicPressed(comic){
    
        this.props.navigator.push({
            name: 'Details',
            title: comic.name,
            passProps: {comic:comic}
        })
    }
    renderComic(comic){
        
        return(
        <TouchableHighlight onPress={()=>this.onComicPressed(comic)}>
            <Image source= {{uri: comic.thumbnail.path + '.jpg'}}
            style= {styles.backgroundImage}>
            <View style={styles.rightContainer}>
                <Text style={styles.title}
                    
                >{comic.name}</Text>
                <Text style={styles.available}>
                    {comic.comics.available}
                    
                </Text>
            </View>
            
            </Image>
        </TouchableHighlight>)
    }
    render(){
        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        return(
            <ListView dataSource= {this.state.dataSource}
            renderRow= {this.renderComic.bind(this)}
            style= {styles.listview}></ListView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 100
    },
    backgroundImage:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 150
    },
    rightContainer: {
        backgroundColor: 'rgba(52,52,52,0.5)', 
        alignSelf: 'stretch',
        paddingTop: 30,
        height: 150
    },
    title:{
        fontSize: 27,
        marginBottom: 8,
        textAlign: 'center',
        color: '#FFF',
        backgroundColor: 'rgba(52,52,52,0)'
    },
    available: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFF',
        backgroundColor: 'rgba(52,52,52,0)'
    },
    listView:{
        paddingTop: 64,
        marginBottom: 49
    }
})


module.exports = dashboardView;

