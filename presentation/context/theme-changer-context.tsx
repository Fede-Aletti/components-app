import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark';
    isSystemTheme: boolean;

    // Methods
    toggleTheme: () => void;
    setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType)

// Custom Hook
export const useThemeChangerContext = () => {
    const themeChange = useContext(ThemeChangerContext)

    return themeChange
}

// Provider
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {

    const { colorScheme, setColorScheme } = useColorScheme();

    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
    const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

    const currentTheme = isSystemThemeEnabled
        ? colorScheme
        : isDarkMode ? 'dark' : 'light';


    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem('selected-theme');
            if (savedTheme) {
                setIsDarkMode(savedTheme === 'dark');
                setIsSystemThemeEnabled(savedTheme === 'system');
            }
        };
        loadTheme();
    }, []);

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

            <ThemeChangerContext.Provider value={{
                currentTheme: currentTheme as 'light' | 'dark',
                isSystemTheme: isSystemThemeEnabled,
                toggleTheme: async () => {
                    setIsDarkMode(!isDarkMode);
                    setColorScheme(isDarkMode ? 'light' : 'dark');
                    setIsSystemThemeEnabled(false);
                    await AsyncStorage.setItem(
                        'selected-theme',
                        isDarkMode ? 'light' : 'dark'
                    );
                },
                setSystemTheme: async () => {
                    setIsSystemThemeEnabled(true);
                    await AsyncStorage.setItem(
                        'selected-theme',
                        'system'
                    );
                }
            }}>
                {children}
            </ThemeChangerContext.Provider>
        </ThemeProvider>
    )
}