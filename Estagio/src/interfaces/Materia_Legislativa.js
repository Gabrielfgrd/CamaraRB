import React, {Component} from 'react';
import{Text,  ScrollView, View, TouchableOpacity, StyleSheet, } from 'react-native';
import {styles, colors} from '../Components/layout';
import PDFView from 'react-native-view-pdf';


export default class Materia_Legislativa extends React.Component {
    
  

    render(){
        return (

         

            <ScrollView style = {styles2.item}>
                <View style ={styles2.detalhes}>
                    <Text style={styles2.titulo}>Ementa:{this.props.materia.ementa} </Text>
                    <Text style={styles2.datas}>Data de Apresentação:{this.props.materia.data_apresentacao} </Text>
                    {/* <Text style={styles2.datas}>Ano de Origem Externa:{this.props.materia.ano_origem_externa} </Text> */}
                    <Text style={styles2.detalhes_txt}>Em tramitação:{this.props.materia.em_tramitacao ? "Em andamento":"Finalizado" }</Text>
                    {/* <Text style={styles2.datas}>Data de Publicação:{this.props.materia.data_publicação} </Text>  */}
                    <Text style={styles2.detalhes_txt}>Apelido: {this.props.materia.apelido} </Text> 
                    {/* <Text style={styles2.datas}>Dias de Prazo:{this.props.materia.dias_prazo} </Text> */}
                    <Text style={styles2.datas}>Data do Fim do Prazo:{this.props.materia.data_fim_prazo} </Text>
                    <Text style={styles2.detalhes_txt}>Complementar:{this.props.materia.complementar} </Text>
                    <Text style={styles2.detalhes_txt}>Observação:{this.props.materia.observacao} </Text>
                    {/* <Text style={styles2.detalhes_txt}>Resultado: {this.props.materia.resultado } </Text> */}
                    <Text style={styles2.datas}>Data da Última Atualização: {this.props.materia.data_ultima_atualizacao} </Text>
                    <Text style={styles2.detalhes_txt}>Autores: {this.props.materia.autores } </Text>
                    <View style={{flez: 1, alignItems: 'center',justifyContent: 'center', marginTop: 30}}>
				</View>
                <View  style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
                    <TouchableOpacity
                    OnPress={ ()=>{}}
                    style={styles.botao}>
                    <Text style={styles.textoBotao}> Texto Completo </Text>
                    </TouchableOpacity>
                </View>
			</View>

            </ScrollView>
        );
    }

}
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