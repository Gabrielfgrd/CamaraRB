import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {
	modificaTipoDeProblemaId,
	modificaDescricao,
	modificaDataCriacao,
	modificaBairro,
    modificaRua,
    recuperaTiposDeProblemas,
    recuperaTodosOsProblemas,
    recuperaProblema
} from '../../actions/ProblemasActions';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class TelaDeProblema extends Component {
    constructor (props){
            super(props);
            this.props.recuperaTiposDeProblemas()
            this.props.recuperaTodosOsProblemas()
        
    }
    componentWillMount(){
        this.props.recuperaTodosOsProblemas();
    }

}

 mapStateToProps = state =>
    {
    const contatos = _map(state.ProblemaReducers, (val,uid) => {
        return {val,uid}
    })
    console.log(contatos);
    return{}
    }
export default connect(mapStateToProps, 
    {  
        recuperaTodosOsProblemas })
(TelaDeProblemas);
