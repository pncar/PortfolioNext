"use client";
import { useTheme } from '@/app/components/ThemeProvider';
import { FaSun, FaMoon } from "react-icons/fa";

const DarkThemeToggle = () => {
    const { dark, toggleDark } = useTheme();

    return(
        <div onClick={toggleDark} className="transition-all cursor-pointer flex items-center rounded-full relative w-10 h-5 shadow-inner bg-primary-300 dark:bg-primary-950 bg-gradient-to-r from-primary-400 to-primary-200 dark:from-primary-900 dark:to-primary-950 border border-primary-300 dark:border-primary-800">
            <button className={`translaxe-x-0 dark:translate-x-full transition-all p-1 w-5 h-5 flex items-center justify-center text-xs rounded-full bg-primary-100 dark:bg-primary-600 text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-800`}>{dark ? <FaMoon/>: <FaSun/>}</button>
        </div>
    )
}
export default DarkThemeToggle;