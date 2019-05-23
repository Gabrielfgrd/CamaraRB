import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button, ScrollView} from 'react-native';



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
                            <View style={styles.botao}>
                                <Button 
                                title="2019"
                                color = '#841584'
                                />
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2018"
                                color = '#841584'
                                />
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2017"
                                color = '#841584'/>
                            </View>
                        </View>


                        <View  style = {styles.painel}>
                            <View style={styles.botao}>
                                <Button  
                                title="2016"
                                color = '#841584'/>
                             </View>
                             <View style={styles.botao}>
                                <Button 
                                title="2015"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2014"
                                color = '#841584'
                                />
                            </View>
                        </View>

                        <View  style = {styles.painel}>
                            <View style={styles.botao}>
                                <Button 
                                title="2013"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2012"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2011"
                                color = '#841584'
                                />
                            </View>
                        </View>

                        <View  style = {styles.painel}>
                            <View style={styles.botao}>
                                <Button 
                                title="2010"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2009"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2008"
                                color = '#841584'
                                />
                            </View>
                        </View>

                        <View  style = {styles.painel}>
                            <View style={styles.botao}>
                                <Button 
                                title="2007"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2006"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2005"
                                color = '#841584'
                                />
                            </View>
                        </View>

                        <View  style = {styles.painel}>
                            <View style={styles.botao}>
                                <Button 
                                title="2005"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2004"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2003"
                                color = '#841584'
                                />
                            </View>
                        </View>

                        <View  style = {styles.painel}>
                            <View style={styles.botao}>
                                <Button 
                                title="2002"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2001"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="2000"
                                color = '#841584'
                                />
                            </View>
                        </View>


                        <View  style = {styles.painel}>
                            <View style={styles.botao}>
                                <Button 
                                title="1999"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="1998"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="1997"
                                color = '#841584'
                                />
                            </View>
                        </View>

                        <View  style = {styles.painel}>
                            <View style={styles.botao}>
                                <Button 
                                title="1996"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="1995"
                                color = '#841584'/>
                            </View>
                            <View style={styles.botao}>
                                <Button 
                                title="1994"
                                color = '#841584'
                                />
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        ); 
    }

};

//Formatações
const styles = StyleSheet.create({
    botao: {
        //backgroundcolor: '#841584',
        width: 120,
        marginBottom:5,
        marginLeft: 10,
        marginRight: 10,
        marginTop:5,
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1
       
    },
    painel: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textobotao:{
        color: '#fff',
        fontSize:16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    titulos:{
        fontSize: 20, 
        justifyContent: 'center',
        alignItems: 'center',
    }

    }); 