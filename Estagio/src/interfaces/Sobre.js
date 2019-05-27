import React from 'react';
import {StyleSheet, View , Text, } from 'react-native';

export default class Sobre extends React.Component {

    render(){
        return(
            <View>
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 20}}>
                    <Text  style={styles.titulo} >CamaraRB</Text>
                </View>
                <View>
                    <Text style={styles.textoPadrao}>
                        A CamaraRb é uma plataforma digital, no qual, está presente informações pertinentes sobre a Câmara Municipal de Rio Branco, através de um aplicativo de tecnologia mobile.
                    </Text>
                </View>

                <View  style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 20}}>
                    <Text style={styles.titulo} >Atendimento</Text>
                </View>
                <View>
                    <Text style={styles.textoPadrao}>Rua 24 de janeiro, nº 53</Text>
                    <Text style={styles.textoPadrao}>Rio Branco, AC - CEP: 69.905-596</Text>
                    <Text style={styles.textoPadrao}>Fone: +55 68 3302-7200</Text>
                    <Text style={styles.textoPadrao}>E-mail: camara@riobranco.ac.leg.br</Text>
                    <View style={{justifyContent: 'space-between'}}>
                        <Text style={styles.textoPadrao}>Expediente:</Text>
                        <Text style={styles.textoPadrao}>De segunda a sexta:
                            - manhã das 8hs às 14hs</Text>
                    </View>
                </View>
            </View>

        );
    }
}

export const styles = StyleSheet.create({
        textoPadrao: {
            fontSize: 20,
            color: '#000000', 
            justifyContent: 'center',
             alignItems: 'center',
             marginRight: 15,
             marginLeft: 15

        },
        titulo:{
            fontSize: 30,
            fontWeight: 'bold'
        }
    }
);
