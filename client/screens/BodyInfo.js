import React from 'react';
import { View, Text,ImageBackground,Image,StyleSheet  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BreastsRecording from '../assets/sounds/breasts.mp3';
import CervixRecording from '../assets/sounds/cervix.mp3';
import FaceRecording from '../assets/sounds/face.mp3';
import MenstruationRecording from '../assets/sounds/menstruation.mp3';
import OvariesRecording from '../assets/sounds/ovaries.mp3';
import PlayButton from '../components/PlayButton';
import BackButton from '../components/BackButton';

export default function BodyInfo({navigation}) {
    return (
        <View style={styles.logoContainer}>
        <ImageBackground resizeMode="contain" style={styles.logo} source={require('../assets/frontbodywoman.png')}/>  
        <View style={styles.playFaceContainer}><PlayButton audio={FaceRecording} /></View>
        <View style={styles.playBreastsContainer}><PlayButton audio={BreastsRecording} /></View>
        <View style={styles.playMenstruationContainer}><PlayButton audio={MenstruationRecording} /></View>
        <View style={styles.playCervixContainer}><PlayButton audio={CervixRecording} /></View>
        <View style={styles.playOvariesContainer}><PlayButton audio={OvariesRecording} /></View>
        <View style={styles.backContainer}>
        <BackButton onPress={() => { navigation.navigate("MainMenu") }} />
      </View>
        </View>
    )
}


const styles = StyleSheet.create({
    backContainer: {
        position:"absolute",
        bottom:"10%",
        right:"45%"
      },
    logoContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:"relative"
    },
    playFaceContainer: {
        position:"absolute",
        bottom:"80%",
        right:"45%"
    },
    playBreastsContainer: {
        position:"absolute",
        bottom:"70%",
        right:"48%"
    },
    playMenstruationContainer: {
        position:"absolute",
        bottom:"50%",
        right:"40%"
    },
    playCervixContainer: {
        position:"absolute",
        bottom:"46%",
        right:"48%"
    },
    playOvariesContainer: {
        position:"absolute",
        bottom:"52%",
        right:"50%"
    },
    logo: {
        width:'100%',
        height:'100%',
    }
  });