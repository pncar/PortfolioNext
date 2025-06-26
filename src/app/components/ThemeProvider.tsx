"use client";
import { useState, createContext, useContext } from 'react';
const ThemeContext = createContext({
    dark: false,
    toggleDark: () => {},
});
export const useTheme = () => useContext(ThemeContext);

export const ThemeWrapper = ({ children }: { children: React.ReactNode}) => {
    const [dark,setDark] = useState<boolean>(false);
    const toggleDark = () => {
        setDark(!dark);
    }
    return(
        <ThemeContext.Provider value={{dark,toggleDark}}>
            <div className={dark ? `dark` : ``}>{children}</div>
        </ThemeContext.Provider>
    )
}