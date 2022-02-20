module.exports = {
    preset: 'jest-expo',
    testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/coverage/**',
        '!**/node_modules/**',
        '!**/babel.config.js',
        '!**/jest.setup.js',
    ],
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
    ],
    coverageReporters: ['json-summary', 'text', 'lcov'],
    verbose: true,
};
