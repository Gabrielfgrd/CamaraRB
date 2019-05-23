import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {Drawer, Container, Header, Content,Button } from 'native-base';

export default class BarraNavegacao extends Component{
  render() {
    return (
      
    <View style={styles.barraTitulo}>
        <Text style={{flex: 1,fontSize: 30, color: '#F8F8FF'}}>Câmara Municipal</Text>
        
    </View> 



   );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: 'rgb(43, 83, 142) ',
        padding: 10,
        height:60, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
   
});

