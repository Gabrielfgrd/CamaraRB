import React from 'react';
import { Router, Scene, Actions, ActionConst, Drawer } from 'react-native-router-flux';
//Inportações das interface
import CenaPrincipal from './src/interfaces/CenaPrincipal'
import Menu from './src/interfaces/Menu';
import MenuInterno from './src/interfaces/MenuInterno';
import Leis from './src/interfaces/Leis';
import TelaCadastroProblema from './src/interfaces/TelaCadastroProblema';
import TelaLogin from './src/interfaces/TelaLogin';
import TelaCadastroUsuario from './src/interfaces/TelaCadastroUsuario';
import Lista_Materia from './src/interfaces/Lista_Materia'
import SAPL from './src/interfaces/SAPL';
import Sobre from './src/interfaces/Sobre';
import TelaAlteraDadosUsuario from './src/interfaces/TelaAlteraDadosUsuario'
import TelaAlteraSenhaUsuario from './src/interfaces/TelaAlteraSenhaUsuario'
import Materia_Legislativa from './src/interfaces/Materia_Legislativa'
import TelaCarregamento from './src/interfaces/TelaCarregamento'


export default class routes extends React.Component {
	render() {
		return (
			<Router 
			navigationBarStyle={{ backgroundColor: 'rgb(43, 83, 142)' }}>
				<Scene
					key="root"
					navBarButtonColor={'#FFFFFF'}
					headerLayoutPreset='center'>
				<Scene
					hideNavBar
					key="TelaCarregamento"
					component={TelaCarregamento} />
					<Drawer
						hideNavBar
						key="MenuExterno"
						contentComponent={Menu}
						drawerWidth={300}
						drawerPosition="left"
						disableGestures={false}
						type={ActionConst.RESET}
					>
						<Scene
							title="Câmara Municipal"
							key='CenaPrincipalExterna'
							component={CenaPrincipal} />
					</Drawer>
					<Drawer
						hideNavBar
						key="MenuInterno"
						contentComponent={MenuInterno}
						drawerWidth={300}
						drawerPosition="left"
						disableGestures={false}
						type={ActionConst.RESET}
					>
						<Scene
							title="Câmara Municipal"
							key='CenaPrincipalInterna'
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
					<Scene
						title='Alterar dados'
						key='TelaAlteraDadosUsuario'
						component={TelaAlteraDadosUsuario} />
					<Scene
						title='Alterar Senha'
						key='TelaAlteraSenhaUsuario'
						component={TelaAlteraSenhaUsuario} />	
					<Scene
						title='Materia Legislativa'
						key='Materia_Legislativa'
						component={Materia_Legislativa} />
					<Scene
						title='Matérias Legislativas'
						key='Lista_Materia'
						component={Lista_Materia} />
						<Scene
						title='Tela Carregamento'
						key='TelaCarregamento'
						component={TelaCarregamento} />
				</Scene>
			</Router>
		);
	}
}
