import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PlayButton from '../components/PlayButton';
import AmharicRecording from '../assets/sounds/amharic_recording.mp3';
import ArabicRecording from '../assets/sounds/arabic_recording.mp3';
import EnglishRecording from '../assets/sounds/english_recording.mp3';
import HebrewRecording from '../assets/sounds/hebrew_recording.mp3';
import RussianRecording from '../assets/sounds/russian_recording.mp3';
import TigreniaRecording from '../assets/sounds/tigrenia_recording.mp3';

export default function SelectLan({ navigation }) {
    const [boolState, setState] = useState(true);
  
    const clickHandler = () => {
      setState(false);
    }

    return (
        
            <View>
            <Text style={styles.boldText}> באיזו שפה תרצי לקבל מידע ?</Text>
            <View style={styles.buttonContainer}>
            <View style={styles.rowContainer}><PlayButton audio={HebrewRecording} /><Button title='עברית' onPress={clickHandler}/></View>
            <View style={styles.rowContainer}><PlayButton audio={AmharicRecording}/><Button title='አማርኛ' onPress={clickHandler}/></View>
            <View style={styles.rowContainer}><PlayButton audio={TigreniaRecording}/><Button title='ትግርኛ' onPress={clickHandler}/></View>
            <View style={styles.rowContainer}><PlayButton audio={ArabicRecording}/><Button title='عربيه' onPress={clickHandler}/></View>
            <View style={styles.rowContainer}><PlayButton audio={RussianRecording}/><Button title='Rрусский' onPress={clickHandler}/></View>
            <View style={styles.rowContainer}><PlayButton audio={EnglishRecording}/><Button title='English' onPress={clickHandler}/></View>
            </View>

            <View style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <View style={{
                    flex: 1
                }}>

            <Button title='<' disabled={boolState} onPress={() => {navigation.navigate("Welcome")}} 
            style={{
                backgroundColor: "#FE434C",
                borderColor: "transparent",
                borderRadius: 20,
                width: 250
                 }}
            textStyle={{ color: "#FFFFFF", fontSize: 100, fontWeight: '400' }}/>

            </View><View style={{
                flex: 1
            }}>
                <Button title='>' onPress={() => {navigation.navigate("Splash")}} 
            style={{
                backgroundColor: "#FE434C",
                borderColor: "transparent",
                borderRadius: 20,
                width: 250
                 }}
            textStyle={{ color: "#FFFFFF", fontSize: 100, fontWeight: '400' }}/>
            
            </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({   
    boldText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },  
    buttonContainer: {
        marginTop: 10,
    },
    rowContainer: {
        flexDirection:'row',
        justifyContent:'center'
    }
  });
  
