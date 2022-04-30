import { ThemeProvider } from "@emotion/react";
import { createContext,useContext, useMemo, useState } from "react";
import {LightTheme} from '../../theme/LightTheme'
import {DarkTheme} from '../../theme/DarkTheme'
const ThemeContext = createContext()

export const useAppThemeContext = ()=>{
    return useContext(ThemeContext)
}

export const AppThemeProvider = ({children})=>{
    const [themeName, setThemeName] = useState(localStorage.getItem("@coffee-app/theme"))
    const toggleTheme = ()=>{
        if(themeName === 'Light'){
            setThemeName('Dark')     
        }
        if(themeName === 'Dark'){
            setThemeName('Light')
        }
    }
    useMemo(()=>{
        if(themeName === 'Light'){
            localStorage.setItem("@coffee-app/theme", themeName)
        }
        else{
            localStorage.setItem("@coffee-app/theme", themeName)
        }
    },[themeName])
    const theme = useMemo(()=>{
        if(themeName === 'Light') return LightTheme
        else return DarkTheme
    },[themeName])
    return(
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
            {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}