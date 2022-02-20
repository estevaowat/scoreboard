import { StyleSheet, View } from 'react-native';
import Countdown from '../components/Countdown';
import Score from '../components/Score';
import { GlobalContext } from '../context/GlobalContext';
import React, { useState, useEffect, useContext } from 'react';
import { getTotalSeconds } from '../services/countdown/countdownService';

const Scoreboard = () => {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const { setIsPaused, resettingMatch, setCountdown, setResettingMatch } =
        useContext(GlobalContext);

    useEffect(() => {
        if (resettingMatch) {
            const totalSeconds = getTotalSeconds(12, 0);
            setCountdown(totalSeconds);
            setIsPaused(true);
            setHomeScore(0);
            setAwayScore(0);
            setResettingMatch(false);
        }
    }, [resettingMatch]);

    return (
        <View style={styles.container}>
            <Score title="HOME" score={homeScore} setScore={setHomeScore} />
            <Countdown />
            <Score title="AWAY" score={awayScore} setScore={setAwayScore} />
        </View>
    );
};

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

export default Scoreboard;
