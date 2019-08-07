import React, { Component } from 'react';
import {StyleSheet,
    SafeAreaView, 
    WebView} from 'react-native';
import { connect } from 'react-redux';

 class YouTubeVideo extends Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }

  render(){
    return(
      <SafeAreaView style={styles.safeArea}>
        {
          <WebView
          // source={{ uri: "https://www.youtube.com/embed/7sVT9a7CuEc"}}
          source={{ uri: "https://www.youtube.com/embed/"+this.props.videoId['id']}}
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

const mapStateToProps = state => (
    {
        videoId: state.YouTubeReducer.videoId,
        id: state.YouTubeReducer.id
    }
)

export default connect(mapStateToProps, {

})(YouTubeVideo);

// import React from 'react';
// import {StyleSheet,
//     View,
//     Text,
//     ScrollView,
//     TouchableOpacity,
//     PixelRatio,
//     Platform,} from 'react-native';
// import YouTube from 'react-native-youtube';
// import {StackNavigator} from 'react-navigation'
// import { connect } from 'react-redux';
// import { YouTubeStandaloneAndroid } from 'react-native-youtube';

//  class YouTubeVideo extends React.Component{
//     state = {
//         isReady: false,
//         status: null,
//         quality: null,
//         error: null,
//         isPlaying: true,
//         isLooping: false,
//         duration: 0,
//         currentTime: 0,
//         fullscreen: false,
//         containerMounted: false,
//         containerWidth: null,
//       };
//     render() {
//         return (
//           <ScrollView
//             style={styles.container}
//             onLayout={({ nativeEvent: { layout: { width } } }) => {
//               if (!this.state.containerMounted) this.setState({ containerMounted: true });
//               if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
//             }}
//           >
           
//             {this.state.containerMounted && (
//               <YouTube
//                 ref={component => {
//                   this._youTubeRef = component;
//                 }}
                
//                 apiKey="AIzaSyCXkounaFYa0pwVrPvFwyD41lHiRRbbYrg"
//                 videoId={this.props.videoId['id']}
//                  videoIds={this.props.videoId['id']}
//                 // playlistId="PLF797E961509B4EB5"
//                 play={this.state.isPlaying}
//                 loop={this.state.isLooping}
//                 fullscreen={this.state.fullscreen}
//                 controls={1}
//                 style={[
//                   { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9)) },
//                   styles.player,
//                 ]}
//                 onError={e => this.setState({ error: e.error })}
//                 onReady={e => this.setState({ isReady: true })}
//                 onChangeState={e => this.setState({ status: e.state })}
//                 onChangeQuality={e => this.setState({ quality: e.quality })}
//                 onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
//                 onProgress={e => this.setState({ duration: e.duration, currentTime: e.currentTime })}
//               />
//             )}
    
//             {/* Playing / Looping */}
//             <View style={styles.buttonGroup}>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => this.setState(s => ({ isPlaying: !s.isPlaying }))}
//               >
//                 <Text style={styles.buttonText}>
//                   {this.state.status == 'playing' ? 'Pause' : 'Play'}
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => this.setState(s => ({ isLooping: !s.isLooping }))}
//               >
//                 <Text style={styles.buttonText}>
//                   {this.state.isLooping ? 'Looping' : 'Not Looping'}
//                 </Text>
//               </TouchableOpacity>
//             </View>
    
//             {/* Go To Specific time in played video with seekTo() */}
//             <View style={styles.buttonGroup}>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => this._youTubeRef && this._youTubeRef.seekTo(15)}
//               >
//                 <Text style={styles.buttonText}>15 Seconds</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => this._youTubeRef && this._youTubeRef.seekTo(2 * 60)}
//               >
//                 <Text style={styles.buttonText}>2 Minutes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => this._youTubeRef && this._youTubeRef.seekTo(15 * 60)}
//               >
//                 <Text style={styles.buttonText}>15 Minutes</Text>
//               </TouchableOpacity>
//             </View>

//             {/* Fullscreen */}
//             {!this.state.fullscreen && (
//               <View style={styles.buttonGroup}>
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => this.setState({ fullscreen: true })}
//                 >
//                   <Text style={styles.buttonText}>Set Fullscreen</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
    
//             {/* Standalone Player (iOS) */}
//             {Platform.OS === 'ios' &&
//               YouTubeStandaloneIOS && (
//                 <View style={styles.buttonGroup}>
//                   <TouchableOpacity
//                     style={styles.button}
//                     onPress={() =>
//                       YouTubeStandaloneIOS.playVideo('KVZ-P-ZI6W4')
//                         .then(() => console.log('iOS Standalone Player Finished'))
//                         .catch(errorMessage => this.setState({ error: errorMessage }))
//                     }
//                   >
//                     <Text style={styles.buttonText}>Launch Standalone Player</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}
    
//             {/* Standalone Player (Android) */}
//             {Platform.OS === 'android' &&
//               YouTubeStandaloneAndroid && (
//                 <View style={styles.buttonGroup}>
//                   <TouchableOpacity
//                     style={styles.button}
//                     onPress={() =>
//                       YouTubeStandaloneAndroid.playVideo({
//                         apiKey: 'AIzaSyCXkounaFYa0pwVrPvFwyD41lHiRRbbYrg',
//                         videoId: this.props.videoId[id] ,
//                         autoplay: true,
//                         lightboxMode: false,
//                         startTime: 124.5,
//                       })
//                         .then(() => console.log('Android Standalone Player Finished'))
//                         .catch(errorMessage => this.setState({ error: errorMessage }))
//                     }
//                   >
//                     <Text style={styles.buttonText}>Standalone: One Video</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={styles.button}
//                     onPress={() =>
//                       YouTubeStandaloneAndroid.playVideos({
//                         apiKey: 'AIzaSyCXkounaFYa0pwVrPvFwyD41lHiRRbbYrg',
//                         videoIds: this.props.videoId[id] ,
//                         autoplay: false,
//                         lightboxMode: true,
//                         startIndex: 1,
//                         startTime: 99.5,
//                       })
//                         .then(() => console.log('Android Standalone Player Finished'))
//                         .catch(errorMessage => this.setState({ error: errorMessage }))
//                     }
//                   >
//                     <Text style={styles.buttonText}>Videos</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={styles.button}
//                     onPress={() =>
//                       YouTubeStandaloneAndroid.playPlaylist({
//                         apiKey: 'AIzaSyCXkounaFYa0pwVrPvFwyD41lHiRRbbYrg',
//                         playlistId: 'PLF797E961509B4EB5',
//                         autoplay: false,
//                         lightboxMode: false,
//                         startIndex: 2,
//                         startTime: 100.5,
//                       })
//                         .then(() => console.log('Android Standalone Player Finished'))
//                         .catch(errorMessage => this.setState({ error: errorMessage }))
//                     }
//                   >
//                     <Text style={styles.buttonText}>Playlist</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}
    
//             {/* Reload iFrame for updated props (Only needed for iOS) */}
//             {Platform.OS === 'ios' && (
//               <View style={styles.buttonGroup}>
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => this._youTubeRef && this._youTubeRef.reloadIframe()}
//                 >
//                   <Text style={styles.buttonText}>Reload iFrame (iOS)</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
    
//             <Text style={styles.instructions}>
//               {this.state.isReady ? 'Player is ready' : 'Player setting up...'}
//             </Text>
//             <Text style={styles.instructions}>Status: {this.state.status}</Text>
//             <Text style={styles.instructions}>Quality: {this.state.quality}</Text>
    
//             {/* Show Progress */}
//             <Text style={styles.instructions}>
//               Progress: {Math.trunc(this.state.currentTime)}s ({Math.trunc(this.state.duration / 60)}:{Math.trunc(
//                 this.state.duration % 60,
//               )}s)
//               {Platform.OS !== 'ios' && <Text> (Click Update Progress & Duration)</Text>}
//             </Text>
    
//             <Text style={styles.instructions}>
//               {this.state.error ? 'Error: ' + this.state.error : ''}
//             </Text>
//           </ScrollView>
//         );
//       }
//     }
    
//     const styles = StyleSheet.create({
//       container: {
//         backgroundColor: 'white',
//       },
//       welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//       },
//       buttonGroup: {
//         flexDirection: 'row',
//         alignSelf: 'center',
//       },
//       button: {
//         paddingVertical: 4,
//         paddingHorizontal: 8,
//         alignSelf: 'center',
//       },
//       buttonText: {
//         fontSize: 18,
//         color: 'blue',
//       },
//       buttonTextSmall: {
//         fontSize: 15,
//       },
//       instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//       },
//       player: {
//         alignSelf: 'stretch',
//         marginVertical: 10,
//       },
//     });

//     //     constructor(props){
// //         super(props);
// //         this.state = {
// //                 isReady: false,
// //                 status: null,
// //                 quality: null,
// //                 error: null,
// //                 isPlaying: true,
// //                 isLooping: false,
// //                 duration: 0,
// //                 currentTime: 0,
// //                 fullscreen: false,
// //                 containerMounted: false,
// //                 containerWidth: null,
// //               };
// //     }


// //     render (){
// //         return(
          
      
// //             <View style ={styles.container}>
// //                 <YouTube
// //             ref={component => {
// //               this._youTubeRef = component;
// //             }}
// //             apiKey="AIzaSyCXkounaFYa0pwVrPvFwyD41lHiRRbbYrg"
// //             videoId= {this.props.videoId['id']}
// //             play={this.state.isPlaying}
// //             loop={this.state.isLooping}
// //             fullscreen={this.state.fullscreen}
// //             controls={1}
// //             style={[
// //               {
// //                 height: PixelRatio.roundToNearestPixel(
// //                   this.state.containerWidth / (16 / 9)
// //                 ),
// //               },
// //               styles.player,
// //             ]}  
// //             onReady={e => this.setState({ isReady: true })}
// //             onError={e => this.setState({ error: e.error })}
// //             onChangeState={e => this.setState({ status: e.state })}
// //             onChangeQuality={e => this.setState({ quality: e.quality })}
// //             onChangeFullscreen={e =>
// //               this.setState({ fullscreen: e.isFullscreen })
// //             }
// //             onProgress={e =>
// //               this.setState({
// //                 duration: e.duration,
// //                 currentTime: e.currentTime,
// //               })
// //             }
// //           />
// //             </View>
           
// //         )
// //     }
// // }
        

// // const styles = StyleSheet.create({
// //     container:{
// //         flex:1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: '#fff'
// //     },
// //           welcome: {
// //             fontSize: 20,
// //             textAlign: 'center',
// //             margin: 10,
// //           },
// //           buttonGroup: {
// //             flexDirection: 'row',
// //             alignSelf: 'center',
// //           },
// //           button: {
// //             paddingVertical: 4,
// //             paddingHorizontal: 8,
// //             alignSelf: 'center',
// //           },
// //           buttonText: {
// //             fontSize: 18,
// //             color: 'blue',
// //           },
// //           buttonTextSmall: {
// //             fontSize: 15,
// //           },
// //           instructions: {
// //             textAlign: 'center',
// //             color: '#333333',
// //             marginBottom: 5,
// //           },
// //           player: {
// //             alignSelf: 'stretch',
// //             marginVertical: 10,
// //           },
// // })
     
    
