import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

interface IScoreProps {
    title: string;
}

function Score(props: IScoreProps) {
    const { title } = props;
    const [score, setScore] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setScore(score + 1);
                }}
                onLongPress={() => {
                    if (score == 0) {
                        return;
                    }
                    setScore(score - 1);
                }}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.score}>{score}</Text>
            </TouchableOpacity>
            <Button onPress={() => setScore(0)} title="Reset" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#FC0000',
        fontFamily: 'LCD-Solid',
    },
    score: {
        paddingTop: 8,
        color: '#F5B601',
        fontFamily: 'LCD-Solid',
        fontSize: 54,
    },
});

export default Score;
