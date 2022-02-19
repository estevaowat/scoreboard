import { Audio } from 'expo-av';
import sounds from './soundHelper';

export default async (soundName: string) => {
    const sound = new Audio.Sound();
    console.log('AQUI 1');
    try {
        await sound.loadAsync(sounds[soundName]);
        console.log('AQUI 2');
        await sound.playAsync();
        console.log('AQUI 3');
    } catch (err) {
        console.error(err);
    }
};
