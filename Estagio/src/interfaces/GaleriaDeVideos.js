import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/MaterialIcons'
import YouTubeVideo from './YouTubeVideo'
import { Actions } from 'react-native-router-flux';
import { modificaId, modificaVideoId } from '../../actions/YouTubeActions'
import { connect } from 'react-redux';

const apiKey = "AIzaSyCXkounaFYa0pwVrPvFwyD41lHiRRbbYrg "
const channelId = 'UCd2nQG02ZVqFw4JJdsmstrg '
const results = 100

class GaleriaDeVideos extends Component {
    constructor (props){
        super(props) 
        this.state={
            data: []
        }
    }
    componentDidMount(){
        const results = 100
        fetch('https://www.googleapis.com/youtube/v3/search/?key=AIzaSyCXkounaFYa0pwVrPvFwyD41lHiRRbbYrg&channelId=UCd2nQG02ZVqFw4JJdsmstrg&part=snippet,id&order=date&maxResults=50')
        .then(res => res.json())
        .then(res => {
            const videoId =[]
            res.items.forEach(item => {
                videoId.push(item)
            })
            this.setState({
                data: videoId
            })
        })
        .catch(error => {
        console.error(error)
        })
    }

    render() {
        return (
            <View style= {styles.container}>
                <ScrollView>
                    <View style={styles.body}>
                    {this.state.data.map((item,i) =>
                        <TouchableHighlight
                            onPress={() => {
                            Actions.YouTubeVideo()
                            this.props.modificaVideoId(item)
                            }}>
                            <View style={styles.vids}>
                                <Image
                                source={{uri: item.snippet.thumbnails.medium.url}}
                                style={{width:320,height:180}}/>
                                <View style={styles.vidItems}>
                                    <Image
                                    source={require('../imgs/papel.jpg')}
                                    style = {{width:40,height:40, borderRadius:20, marginRight:5}}/>
                                    <Text style={styles.vidText}>{item.snippet.title}</Text>
                                    <Icon name ='more-vert' size={20} color='#555'/>       
                            </View>
                            </View>
                        </TouchableHighlight>
                    )}
                    </View>
                </ScrollView>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1
    },
    body: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 30
    },
    vids:{
        paddingBottom:30,
        width:320,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderBottomWidth: 0.6,
        borderColor: '#aaa'

    },
    vidItems:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    vidText:{
        padding: 20,
        color: '#000'
    },
    })

    const mapStateToProps = state => (
        {
            videoId: state.YouTubeReducer.videoId,
            id: state.YouTubeReducer.id
        }
    )

export default connect(mapStateToProps, {
	modificaVideoId,
	modificaId
})(GaleriaDeVideos);