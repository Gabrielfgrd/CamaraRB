import React, {Component} from 'react';
import{View, Text} from 'react-native';
import axios from 'axios';
import Materia_Legislativa from './Materia_Legislativa';



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
        axios.get('https://sapl.jatai.go.leg.br/api/docs/swagger/?format=openapi')
        .then(response => {
            console.log(response.data.definitions);})
            // this.setState({tipo_materia: response.data});})
        .catch (() => {console.log('Erro ao recuperar os dados')});
    }


    // getTipo_Materia = () =>{

    //     this.setState({loading: true})

    //     fetch(this.state.url)
    //     .then(res=> res.json())

    // };


    render(){
        return (
            <View>
              
            </View>
        );
    }

}