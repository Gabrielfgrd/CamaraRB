import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';


export default class Noticia extends Component{


    render() {
        return (
            // <ScrollView style={styles2.item}>
            //     <View style={styles2.detalhes}>
            //         <Text style={styles2.titulo}>{this.props.item.title} </Text>
                   
            //     </View>

            // </ScrollView>
        );
    }

}
console.log(this.props.item.title)
const styles2 = StyleSheet.create ({
    item:{
        borderWidth: 0.5,
        borderColor: '#999', 
        margin: 10,
        padding: 10,
    },
    detalhes:{
        marginLeft:5,
        flex:1
    },
    titulo:{
        fontSize: 18,
        color:'blue',
        marginBottom: 5
    },
    datas:{
        fontSize:16,
        fontWeight: 'bold'

    },
    detalhes_txt:{
        fontSize: 16
    }
})