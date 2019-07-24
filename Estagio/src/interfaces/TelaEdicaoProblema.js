import React, { Component } from 'react';
import {
    Text,
    View,
    Picker,
    TextInput
} from 'react-native';
import {
    modificaEdiTipoDeProblemaId,
    modificaEdiDescricao,
    modificaEdiBairro,
    modificaEdiRua,
    recuperaTiposDeProblemas,
    editaDadosDoProblema
} from '../../actions/ProblemasActions'
import { connect } from 'react-redux';

import { styles, colors } from '../Components/layout'
import Botao from '../Components/Botao'


class TelaEdicaoProblema extends Component {
    constructor(props) {
        super(props);
        this.props.recuperaTiposDeProblemas()
        this.state = {
            tipoDeProblemaSelecionado: this.props.ediTipoDeProblemaId
        }
    }

    _edicaoDeProblema() {
        const { autorId, id, ediTipoDeProblemaId, ediDescricao, ediDataCriacao, ediBairro, ediRua } = this.props
        this.props.editaDadosDoProblema({ autorId, id, ediTipoDeProblemaId, ediDescricao, ediDataCriacao, ediBairro, ediRua })
    }

    render() {
        return (
            <View>
                <View>
                    <View style={{ alignItems: 'center', marginTop: 15, fontSize: 20 }}>
                        <Text style={{ fontSize: 20 }}>Tipo de problema:</Text>
                        <Picker
                            selectedValue={this.state.tipoDeProblemaSelecionado}
                            onValueChange={(itemValue) => {
                                this.setState({ tipoDeProblemaSelecionado: itemValue})
                                this.props.modificaEdiTipoDeProblemaId(itemValue)
                            }}
                            style={{ height: 50, width: 200 }}>
                            {this.props.tiposDeProblemas.map(tipoDeProblema => (
                                <Picker.Item
                                    label={tipoDeProblema.titulo}
                                    value={tipoDeProblema.id}
                                />
                            ))}
                        </Picker>
                        <Text style={{ fontSize: 20 }}>Descrição do tipo de problema</Text>
                        <TextInput value={this.props.ediDescricao} maxLength={200} multiline={true} style={styles.textArea} placeholder="descrição do problema" onChangeText={(texto) => { this.props.modificaEdiDescricao(texto) }} />
                        <Text style={{ fontSize: 20 }}>Bairro</Text>
                        <TextInput value={this.props.ediBairro} maxLength={200} multiline={true} style={styles.textArea} placeholder="bairro aonde ocorreu o problema" onChangeText={(texto) => { this.props.modificaEdiBairro(texto) }} />
                        <Text style={{ fontSize: 20 }}>Rua</Text>
                        <TextInput value={this.props.ediRua} maxLength={200} multiline={true} style={styles.textArea} placeholder="rua aonde ocorreu o problema" onChangeText={(texto) => { this.props.modificaEdiRua(texto) }} />
                        <Botao texto='Confirmar' onPress={() => { this._edicaoDeProblema() }} />
                    </View>
                </View>
            </View>
        );
    }
}



const mapStateToProps = state => (
    {
        ediTipoDeProblemaId: state.ProblemaReducer.ediTipoDeProblemaId,
		ediDescricao: state.ProblemaReducer.ediDescricao,
		ediDataCriacao: state.ProblemaReducer.ediDataCriacao,
        ediBairro: state.ProblemaReducer.ediBairro,
        ediRua: state.ProblemaReducer.ediRua,
		tiposDeProblemas: state.ProblemaReducer.tiposDeProblemas,

		autorId: state.ProblemaReducer.autorId,
		id: state.ProblemaReducer.id
    }
)

export default connect(mapStateToProps, {
    modificaEdiTipoDeProblemaId,
	modificaEdiDescricao,
    modificaEdiBairro,
    modificaEdiRua,
	recuperaTiposDeProblemas,
	editaDadosDoProblema
})(TelaEdicaoProblema);