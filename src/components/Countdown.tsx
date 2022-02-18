import { StyleSheet, Text, View, Button } from "react-native";
import {
  getTotalSeconds,
  formatTotalSecondsToCountdown,
} from "../services/countdown/countdownService";
import React, { useEffect, useState } from "react";
import { playAudio } from "../services/sound/soundService";
interface InitialProps {
  minutes?: number;
  seconds?: number;
}

const Countdown = ({ minutes = 12, seconds = 0 }: InitialProps) => {
  const [isPaused, setIsPaused] = useState(true);
  const [countdown, setCountdown] = React.useState<number>(
    getTotalSeconds(minutes, seconds)
  );

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
              playAudio("buzzer");
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
      <Text style={styles.textContainer}>
        {formatTotalSecondsToCountdown(countdown)}
      </Text>
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
