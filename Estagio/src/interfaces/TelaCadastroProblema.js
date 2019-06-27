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
				now = new Date
				this.props.modificaDataCriacao(now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear())
				//this.props.modificaTipoDeProblemaId(this.props.tiposDeProblemas[0].id)
				this.props.recuperaTiposDeProblemas()
				this.state = {
					tipoDeProblemaSelecionado: this.props.tiposDeProblemas[0].id
				}
				console.log(this.props.tiposDeProblemas)
			}
			_inclusaoDeProblema() {
				if(this.props.descricao!=''){
					Actions.TelaCarregamento();
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
						selectedValue ={()=>{this.state.tipoDeProblemaSelecionado
							
						} } 
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
						<TextInput maxLength={200} multiline={true} style={styles.textArea} placeholder='Rua'/>
						<Text style={styles.textoPadrao}>Bairro:</Text>
						<TextInput maxLength={200} multiline={true} style={styles.textArea} placeholder='Bairro'/>
						<Text style={styles.textoPadrao}>Descreva o problema:</Text>
						<TextInput maxLength={200} multiline={true} style={styles.textArea} placeholder='Descreva o Problema'/>
					</View>
					<View style={{flex: 1, alignItems: 'center',justifyContent: 'center', marginTop: 30}}>
						<TouchableOpacity
						OnPress={ ()=>{this.salvarProblemas(); }}
						style={styles.botao}>
						<Text style={styles.textoBotao}> Cadastrar </Text>
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