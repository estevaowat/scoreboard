import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Scoreboard() {
  return (
    <View>
      <Text>Scoreboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
