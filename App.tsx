import AppLoading from 'expo-app-loading';
import { GlobalContext } from './src/context/GlobalContext';
import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as Font from 'expo-font';

import Scoreboard from './src/screens/Scoreboard';
import GlobalContextProvider from './src/context/GlobalContext';
import { getTotalSeconds } from './src/services/countdown/countdownService';

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
        <GlobalContextProvider>
            <Scoreboard />
        </GlobalContextProvider>
    );
}
