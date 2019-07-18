import React, {Component} from 'react';
import{ScrollView,View,TouchableOpacity,Text} from 'react-native';
import axios from 'axios';
import Materia_Legislativa from './Materia_Legislativa';
import {styles, colors} from '../Components/layout';
import { Actions } from 'react-native-router-flux';
import { SearchBar } from 'react-native-elements';




export default class Lista_Materia extends React.Component {
 
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            tipo_materia: [],
            error: null,
            search: '',
        }
       
    }

    componentWillMount() {
        // requisição HTTP
        axios.get('https://sapl.riobranco.ac.leg.br/api/materia/materialegislativa/')
        .then(response => { this.setState({tipo_materia: response.data.results }); })
        .catch( () => {console.log('Erro ao recuperar os dados')} );
        console.log(this.state.tipo_materia)
    }
    
    
    // getTipo_Materia = () =>{

    //     this.setState({loading: true})

    //     fetch(this.state.url)
    //     .then(res=> res.json())

    // };
    updateSearch = tipo_materia => {
        this.setState({ tipo_materia });
    };

    render() {
        const { tipo_materia } = this.state;
        return (
            <View>
            <SearchBar
                placeholder="Escreva aqui..."
                onChangeText={this.updateSearch}
                value={tipo_materia}
            />
            <ScrollView>
                {this.state.tipo_materia.map(item => (<Materia_Legislativa key={item.ementa} materia={item} />))}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        OnPress={() => { Actions.tipo_materia(item.page) }}
                        style={styles.botao}>
                        <Text style={styles.textoBotao}> Carregar Mais </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            </View>
        );
    }

}