import { StyleSheet, Text, View, Button } from "react-native";
import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";

interface InitialProps {
  minutes?: number;
  seconds?: number;
}

function trailingZeros(number: number, places: number): string {
  return String(number).padStart(places, "0");
}

const formatCountDown = (countdown: number | undefined = 0): String => {
  const NUMBER_SIZE = 2;
  const minutes = trailingZeros(Math.floor(countdown / 60), NUMBER_SIZE);
  const seconds = trailingZeros(countdown % 60, NUMBER_SIZE);

  return `${minutes}:${seconds}`;
};

const getTotalSeconds = (minutes: number, seconds: number): number => {
  const secondsInMinutes = minutes * 60;
  return secondsInMinutes + seconds;
};

const Countdown = ({ minutes = 12, seconds = 0 }: InitialProps) => {
  const [isPaused, setIsPaused] = useState(true);
  const [countdown, setCountdown] = React.useState<number>(
    getTotalSeconds(minutes, seconds)
  );

  const playAudio = async () => {
    const newSound = new Audio.Sound();
    try {
      await newSound.loadAsync(require("../../assets/basketball-buzzer.mp3"));
      await newSound.playAsync();
    } catch (err) {
      console.error(err);
    }
  };

  const resetCountdown = () => {
    const totalSeconds = getTotalSeconds(minutes, seconds);
    setCountdown(totalSeconds);
    setIsPaused(true);
  };

  useEffect(() => {
    if (!isPaused) {
      let interval = setInterval(() => {
        setCountdown((previousSeconds) => {
          if (previousSeconds > 0) {
            const newCountdown = previousSeconds - 1;
            if (newCountdown == 0) {
              playAudio();
            }
            return newCountdown;
          }
          return 0;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [countdown, isPaused]);

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{formatCountDown(countdown)}</Text>
      {countdown > 0 && (
        <Button
          onPress={() => {
            setIsPaused(!isPaused);
          }}
          color="#FFFFFF"
          title={isPaused ? "Continue" : "Pause"}
          accessibilityLabel="Button to start countdown"
        />
      )}

      <Button
        onPress={() => {
          resetCountdown();
        }}
        color="#FFFFFF"
        title="Reset match"
        accessibilityLabel="Button to reset match"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 280,
  },
  textContainer: {
    color: "#FC0000",
    fontSize: 80,
    fontFamily: "LCD-Solid",
  },
});

export default Countdown;
