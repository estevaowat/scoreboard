import AppLoading from 'expo-app-loading';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as Font from 'expo-font';
import Countdown from './src/components/Countdown';
import Score from './src/components/Score';

async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT,
    );
}

async function loadFonts() {
    await Font.loadAsync({
        'LCD-Solid': require('./assets/LcdSolid-VPzB.ttf'),
    });
}

export default function App() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        changeScreenOrientation();
        loadFonts();
    }, []);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setIsReady(true)}
                onError={e => console.error(e)}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Score title="HOME" />
            <Countdown />
            <Score title="AWAY" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#121212',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});
