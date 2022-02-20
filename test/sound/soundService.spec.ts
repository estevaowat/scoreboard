import playAudio from '../../src/services/sound/soundService';

describe('Sound service', () => {
    describe('play audio', () => {
        it('should play audio when sound name is correct', () => {
            const soundName = 'buzzer';
            //acho que um jeito de realizar o teste seria mockando o audio

            expect(async () => {
                await playAudio(soundName);
            }).toThrow();
        });
    });
});
