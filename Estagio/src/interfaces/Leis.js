import React, {Component} from 'react';
import { Text, View,TouchableOpacity, ScrollView} from 'react-native';
import {styles, colors} from '../Components/layout';


export default class Leis extends Component{
   static navigationOptions={
       drawerLablel: 'Main Screen',
   }
    render(){
        return(
            <ScrollView >
                <View >
                    
                    <View style={{ alignItems: 'center', marginTop: 15, marginBottom :20 }}>
                        <Text style ={styles.titulos}>CÂMARA MUNICIPAL DE RIO BRANCO - ACRE</Text>
                        <Text style ={styles.titulos} > PORTAL DA TRANSPARÊNCIA - CMRB</Text>
                    </View>
                    
                    
                    <View >

                        <View style = {styles.painel}>
                            <TouchableOpacity
                                style={styles.botaoLeis}
                                onPress={false}>
                                <Text style={styles.textoBotao}> 2019 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.botaoLeis}
                                onPress={false}>
                                <Text style={styles.textoBotao}> 2018 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.botaoLeis}
                                onPress={false}>
                                <Text style={styles.textoBotao}> 2018 </Text>
                            </TouchableOpacity>
                        </View>
                        

                    </View>
                </View>
            </ScrollView>
        ); 
    }

};

