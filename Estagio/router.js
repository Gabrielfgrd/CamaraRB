import React from 'react';
import { Router, Scene, Actions, ActionConst, Drawer } from 'react-native-router-flux';
//Inportações das interface
import CenaPrincipal from './src/interfaces/CenaPrincipal'
import Menu from './src/interfaces/Menu';
import Leis from './src/interfaces/Leis';
import TelaCadastroProblema from './src/interfaces/TelaCadastroProblema';
import TelaLogin from './src/interfaces/TelaLogin';
import TelaCadastroUsuario from './src/interfaces/TelaCadastroUsuario'
import SAPL from './src/interfaces/SAPL';
import Sobre from './src/interfaces/Sobre';


export default class routes extends React.Component {
	render() {
		return (
			<Router 
			navigationBarStyle={{ backgroundColor: 'rgb(43, 83, 142)' }}>
				<Scene
					key="root"
					navBarButtonColor={'#FFFFFF'}
					headerLayoutPreset='center'>
					<Drawer
						hideNavBar
						key="Menu"
						contentComponent={Menu}
						drawerWidth={300}
						drawerPosition="left"
						disableGestures={false}
						type={ActionConst.RESET}
					>
						<Scene
							title="Câmara Municipal"
							key='CenaPrincipal'
							component={CenaPrincipal} />
					</Drawer>
					<Scene
						title='Login'
						key='TelaLogin'
						component={TelaLogin} />
					<Scene
						title='Cadastro de Usuário'
						key='TelaCadastroUsuario'
						component={TelaCadastroUsuario} />
					<Scene
						title='Legislação do Municipio'
						key='Leis'
						component={Leis} />
					<Scene
						title='Cadastro de Problema'
						key='TelaCadastroProblema'
						component={TelaCadastroProblema} />
				<Scene
						title='Pesquisar Matéria Legislativa'
						key='SAPL'
						component={SAPL} />
				<Scene
						title='Sobre'
						key='Sobre'
						component={Sobre} />

				</Scene>
			</Router>
		);
	}
}