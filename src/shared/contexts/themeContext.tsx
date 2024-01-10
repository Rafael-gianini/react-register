
import { ThemeContextData } from "../../models-interface/themeContextData";
import { DarkTheme, LightTheme } from "../themes";
import { ThemeProvider } from "@mui/material";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { ProviderProps } from "../../models-interface/providerProps";


const ThemeContext = createContext({} as ThemeContextData);

export const UseAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<ProviderProps> = ({ children }) => {

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;

        return DarkTheme;
    }, [themeName])


    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>

        </ThemeContext.Provider>
    )
}