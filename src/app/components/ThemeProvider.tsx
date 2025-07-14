"use client";
import { useState, createContext, useContext, useEffect } from 'react';
const ThemeContext = createContext({
    dark: false,
    toggleDark: () => {},
});
export const useTheme = () => useContext(ThemeContext);

export const ThemeWrapper = ({ children }: { children: React.ReactNode}) => {

    const [dark,setDark] = useState<boolean>(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setDark(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);
    
    const toggleDark = () => {
        setDark(!dark);
    }

    return(
        <ThemeContext.Provider value={{dark,toggleDark}}>
            <div className={dark ? `dark` : ``}>{children}</div>
        </ThemeContext.Provider>
    )
}