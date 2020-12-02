import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import PlayButton from '../components/PlayButton';
import WelcomeRecording from '../assets/sounds/welcome_recording.mp3';
import NextButton from '../components/NextButton';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" style={styles.logo} source={require('../assets/Logo.jpeg')} />
      <View style={{flexDirection:"row"}}>
      <View style={styles.playContainer}><PlayButton color="white" audio={WelcomeRecording} /></View>
        <Text style={styles.boldText}>ברוכה הבאה ל'בריאה'!</Text>
      </View>
      <View style={styles.body}>
        <Text enum='rtl'>באפליקציה זו תוכלי לקבל מידע אודות גופך ובריאותך
        הנשית ובהתאם לגילך.
      חשוב לציין, אפליקציה זו אינה מהווה תחליף להמלצות רפואיות שניתנו ע"י רופאה.</Text>
      </View>
      <View style={styles.nextContainer}>
        <NextButton onPress={() => { navigation.navigate("SelectAge") }} />
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  playContainer: {
    marginHorizontal:10
  },
  nextContainer: {
    position:"absolute",
    bottom:"10%",
    right:"45%"
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#fff'
  },
  body: {
    width: "80%",
    backgroundColor: '#f7f7f7',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  },
  logo: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }

});
