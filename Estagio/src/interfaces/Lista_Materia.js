import React, {Component} from 'react';
import{ScrollView} from 'react-native';
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
            </ScrollView>
        );
    }

}