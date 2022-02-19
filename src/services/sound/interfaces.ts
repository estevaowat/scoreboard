import { AVPlaybackSource } from 'expo-av/build/AV';

export interface ISounds {
    [key: string]: AVPlaybackSource;
}
