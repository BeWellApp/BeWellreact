import React from 'react';
import { View, Text,Button} from 'react-native';
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';

export default function SelectLan({ navigation }) {
    return (
        <View>
            <Text>SelectLan</Text>
            <View style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <View style={{
                    flex: 1
                }}>
            <NextButton onPress={() => {navigation.navigate("Welcome") }} />
            </View><View style={{
                flex: 1
            }}>
            <BackButton onPress={() => {navigation.navigate("Splash") }} size={0.1}/>
            </View>
            </View>
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />

        </View>
    )
}
