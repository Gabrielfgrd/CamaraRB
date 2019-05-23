import React from 'react';
import { Router, Scene, Actions, ActionConst, Drawer } from 'react-native-router-flux';
//Inportações das interfaces

import CenaPrincipal from './src/Components/CenaPrincipal'
import Menu from './src/Components/Menu';


export default class routes extends React.Component {
    render() {
		return (
            <Router>
                navigationBarStyle={{ backgroundColor: 'rgb(43, 83, 142)' }}>
                    <Scene
                    key="root"
                    navBarButtonColor = {'#FFFFFF'}
                    headerLayoutPreset='center'>
                    <Scene
                        hideNavBar 
                        key = "CenaPrincipal"
                        component = {CenaPrincipal}/>
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
							title="CCâmara Municipal"
							key='Menu'
							component={Menu} />
                    </Drawer>    
                    </Scene>
            </Router>
        );
    }
}