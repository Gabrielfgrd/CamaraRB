import React, {Component} from 'react';
import{ScrollView,View,TouchableOpacity,Text} from 'react-native';
import axios from 'axios';
import Materia_Legislativa from './Materia_Legislativa';
import {styles, colors} from '../Components/layout';




export default class Lista_Materia extends React.Component {
 
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            tipo_materia: []
        }
    }

    componentWillMount() {
        // requisição HTTP
        axios.get('https://sapl.riobranco.ac.leg.br/api/materia/materialegislativa/')
        .then(response => { this.setState({tipo_materia: response.data.results }); })
        .catch( () => {console.log('Erro ao recuperar os dados')} );
    }


    // getTipo_Materia = () =>{

    //     this.setState({loading: true})

    //     fetch(this.state.url)
    //     .then(res=> res.json())

    // };


    render(){
        return (
            <ScrollView>
              {this.state.tipo_materia.map(item =>   ( <Materia_Legislativa key={item.ementa} materia={item} /> ) ) }
              <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', marginTop: 30, flexDirection: 'row',justifyContent: 'space-around'}}>
						<TouchableOpacity
						OnPress={ ()=>{ }}
						style={styles.botao}>
						<Text style={styles.textoBotao}> 1 </Text>
						</TouchableOpacity>
                       
                       
					</View>
            </ScrollView>
        );
    }

}