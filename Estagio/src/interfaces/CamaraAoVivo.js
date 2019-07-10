import React, { Component } from 'react';
import {StyleSheet, 
    SafeAreaView, 
    WebView} from 'react-native';


 export default class CamaraAoVivo extends Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }
  apiKey="AIzaSyCXkounaFYa0pwVrPvFwyD41lHiRRbbYrg"
  render(){
    return(
      <SafeAreaView style={styles.safeArea}>
        {
          <WebView
          // source={{ uri: "https://www.youtube.com/embed/7sVT9a7CuEc"}}
          source={{ uri: "https://www.youtube.com/embed/1tYrevIh820"}}
          startInLoadingState={true}
          />
        }
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
});