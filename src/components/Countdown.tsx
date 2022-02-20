import { StyleSheet, Text, View, Button } from 'react-native';
import { GlobalContext } from '../context/GlobalContext';
import React, { useEffect, useContext } from 'react';
import { formatTotalSecondsToCountdown } from '../services/countdown/countdownService';
import playAudio from '../services/sound/soundService';

function Countdown() {
    const {
        isPaused,
        setIsPaused,
        countdown,
        setCountdown,
        setResettingMatch,
    } = useContext(GlobalContext);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCountdown(previousSeconds => {
                    const newSeconds = previousSeconds - 1;

                    if (newSeconds == 0) {
                        playAudio('buzzer');
                        return 0;
                    }

                    return newSeconds;
                });
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [countdown, isPaused]);

    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>
                {formatTotalSecondsToCountdown(countdown)}
            </Text>
            {countdown > 0 && (
                <Button
                    onPress={() => {
                        setIsPaused(!isPaused);
                    }}
                    color="#FFFFFF"
                    title={isPaused ? 'Start' : 'Pause'}
                    accessibilityLabel="Button to start countdown"
                />
            )}

            <Button
                onPress={() => {
                    setResettingMatch(true);
                }}
                color="#FFFFFF"
                title="Reset match"
                accessibilityLabel="Button to reset match"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 280,
    },
    textContainer: {
        color: '#FC0000',
        fontSize: 80,
        fontFamily: 'LCD-Solid',
    },
});

export default Countdown;
