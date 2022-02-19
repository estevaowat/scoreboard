import { formatTotalSecondsToCountdown } from '../../src/services/countdown/countdownService';

describe('countdown service', () => {
    describe('formatTotalSecondsToCountdown', () => {
        it('should format 120 seconds to 2 minutes in the format hh:mm', () => {
            const secondsToFormat = 120;
            const result = formatTotalSecondsToCountdown(secondsToFormat);
            expect(result).toBe('02:00');
        });
    });
});
