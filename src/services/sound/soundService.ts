import { Audio } from 'expo-av';
import sounds from './soundHelper';

export default async (soundName: string) => {
    const sound = new Audio.Sound();
    try {
        const soundFile = sounds[soundName];
        console.log(soundFile);
        await sound.loadAsync(soundFile);
        await sound.playAsync();
    } catch (err) {
        console.error(err);
    }
};
