import firebase from 'firebase';
import React from 'react';
import { Text, View, ScrollView, Picker, TouchableOpacity, TextInput} from 'react-native';
import {styles, colors} from '../Components/layout';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaTipoDeProblemaId, modificaDescricao, modificaDataCriacao, modificaBairro,modificaRua,  inclusaoProblema, recuperaTiposDeProblemas } from '../../actions/ProblemasActions';



class TelaCadastroProblema extends React.Component {
			constructor(props) {
				super(props);
				this.props.recuperaTiposDeProblemas()
				now = new Date
				this.props.modificaDataCriacao(now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear())
				// this.props.modificaTipoDeProblemaId(this.props.tiposDeProblemas[0].id)
				this.state = {
					tipoDeProblemaSelecionado: ''
				}
			}
			_inclusaoDeProblema() {
				if(this.props.descricao!=''){
					const { descricao, tipoDeProblemaId, dataCriacao, bairro, rua } = this.props
					this.props.inclusaoProblema({ descricao, tipoDeProblemaId, dataCriacao, bairro, rua })
				}else{
					alert('Escreva uma descrição do problema, isso ajudará na identificação dele.')
				}
			}

	render(){

		return(
			
				<ScrollView style={{flex: 1, padding: 10, marginTop:25}}>
					<View style={{flex: 2, alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={styles.textoPadrao}>Tipo de problema:</Text>
						<Picker
						selectedValue ={this.state.tipoDeProblemaSelecionado } 
						onValueChange={(itemValue) => {
							this.setState({ tipoDeProblemaSelecionado: itemValue})
							this.props.modificaTipoDeProblemaId(itemValue)
						}}
						style={{ height: 60, width: 200, color: colors.preto }}
						>
						{this.props.tiposDeProblemas.map(tipoDeProblema => (
							<Picker.Item
								label={tipoDeProblema.titulo}
								value={tipoDeProblema.id}
							/>
						))}
						</Picker>
					</View >
					<View style={{flex: 3, alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={styles.textoPadrao}>Rua:</Text>
						<TextInput maxLength={200}  value={this.props.rua} multiline={true} style={styles.textArea} placeholder='Rua' onChangeText={texto => this.props.modificaRua(texto)}/>
						<Text style={styles.textoPadrao}>Bairro:</Text>
						<TextInput maxLength={200}  value={this.props.bairro} multiline={true} style={styles.textArea} placeholder='Bairro' onChangeText={texto => this.props.modificaBairro(texto)}/>
						<Text style={styles.textoPadrao}>Descreva o problema:</Text>
						<TextInput maxLength={200}  value={this.props.descricao} multiline={true} style={styles.textArea} placeholder='Descreva o Problema' onChangeText={texto => this.props.modificaDescricao(texto)}/>
					</View>
					<View style={{flex: 1, alignItems: 'center',justifyContent: 'center', marginTop: 30}}>
						<TouchableOpacity
						OnPress={ ()=>{this._inclusaoDeProblema(); }}
						style={styles.botao}>
						<Text style={styles.textoBotao}> Inserir Problema </Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			

			); 
    }
};

const mapStateToProps = state => (
	{
		tipoDeProblemaId: state.ProblemaReducer.tipoDeProblemaId,
		descricao: state.ProblemaReducer.descricao,
		dataCriacao: state.ProblemaReducer.dataCriacao,
		bairro: state.ProblemaReducer.bairro,
		rua: state.ProblemaReducer.rua,
		tiposDeProblemas: state.ProblemaReducer.tiposDeProblemas
	}
)
export default connect(mapStateToProps, {
	modificaTipoDeProblemaId,
	modificaDescricao,
	modificaDataCriacao,
	modificaBairro,
	modificaRua,
	inclusaoProblema,
	recuperaTiposDeProblemas,
})(TelaCadastroProblema);
