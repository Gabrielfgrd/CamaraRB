import React, {Component} from 'react';
import { Text, View,TouchableOpacity, ScrollView,Picker, Alert} from 'react-native';
import {styles, colors} from '../Components/layout';


export default class Leis extends Component{
  
    constructor(){
        super();
        this.state={
            PickerSelectedVal: ""
        }
    }
  
    static navigationOptions={
       drawerLablel: 'Main Screen',
   }

   getSelectedPickervalue=()=>{
       Alert.alert("Ano da lei: " + this.state.SelectedPickervalue)
   }

    render(){
        return(
            <ScrollView >
                <View >
                    
                    <View style={{ alignItems: 'center', marginTop: 25, marginBottom :20 }}>
                        <Text style ={styles.titulos}>CÂMARA MUNICIPAL DE RIO BRANCO - ACRE</Text>
                        <Text style ={styles.titulos} > PORTAL DA TRANSPARÊNCIA - CMRB</Text>
                    </View>
                    
                    
                    <View >

                        <View style={{flex: 2, alignItems: 'center', marginTop: 15, fontSize: 20 }}>
                            <Text style={styles.textoPadrao}>Ano da Lei:</Text>
                                <Picker>

                                </Picker>
                            <TouchableOpacity
                                OnPress={ ()=>{}}
                                style={styles.botao}>
                                <Text style={styles.textoBotao}> Buscar </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        ); 
    }

};

