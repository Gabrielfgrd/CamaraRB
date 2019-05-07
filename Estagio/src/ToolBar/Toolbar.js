import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ToolbarAndroid} from 'react-native';

export default class Toolbar extends React.Component{

	render() {
		return (
            <ScrollView styles ={{backgroundcolor = '#CCC' }}>
                <View style={{ paddingTop: 20, paddingBottom: 10, alignItems: 'center' }}>
					<Text style={{ fontSize: 40, backgroundcolor = '#f8f8ff' }}>Menu</Text>
				</View >
                
            </ScrollView> 
            );
	}
}
