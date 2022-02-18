import { Audio } from "expo-av";
import sounds from "./soundHelper";

export const playAudio = async (soundName: string) => {
  const sound = new Audio.Sound();
  try {
    await sound.loadAsync(sounds[soundName]);
    await sound.playAsync();
  } catch (err) {
    console.error(err);
  }
};
