import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, TouchableOpacity} from 'react-native';
import axios from 'axios';
//this.props.data   this.props.titulo
export default class Noticia  extends Component{
    constructor(props) {
        super(props);
    }
  
render(){
        return(
            <View>
            <TouchableOpacity>
                <Text>{this.props.data}</Text>
                <Text>{this.props.titulo}</Text>
            </TouchableOpacity>
            </View>
        );
    }
}