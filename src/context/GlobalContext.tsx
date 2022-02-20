import React, { useState } from 'react';
import { getTotalSeconds } from '../services/countdown/countdownService';

interface IGlobalContext {
    isPaused: boolean;
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
    resettingMatch: boolean;
    setResettingMatch: React.Dispatch<React.SetStateAction<boolean>>;
    countdown: number;
    setCountdown: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = React.createContext<IGlobalContext>({
    isPaused: true,
    resettingMatch: false,
    setResettingMatch: () => {},
    setIsPaused: (value: any) => {},
    countdown: 0,
    setCountdown: (value: any) => {},
});

export default function GlobalContextProvider({ children }: any) {
    const minutesDefault = 12;
    const secondsDefault = 0;
    const [isPaused, setIsPaused] = useState(true);
    const [resettingMatch, setResettingMatch] = useState(false);
    const [countdown, setCountdown] = useState(
        getTotalSeconds(minutesDefault, secondsDefault),
    );

    return (
        <GlobalContext.Provider
            value={{
                isPaused,
                setIsPaused,
                resettingMatch,
                setResettingMatch,
                countdown,
                setCountdown,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
