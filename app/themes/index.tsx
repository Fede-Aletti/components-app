import { useThemeChangerContext } from '@/presentation/context/theme-changer-context';
import ThemedCard from '@/presentation/shared/themed-card';
import ThemedSwitch from '@/presentation/shared/themed-switch';
import ThemedView from '@/presentation/shared/themed-view';
import { useState } from 'react';


const ThemesScreen = () => {
  const { currentTheme, isSystemTheme, toggleTheme, setSystemTheme } = useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme
  });

  const setDarkMode = (value: boolean) => {
    toggleTheme();
    setDarkModeSettings({
      darkMode: value,
      systemMode: false
    });
  }

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value
    });
  }

  return (
    <ThemedView className='mt-5'>
      <ThemedCard className='mt-5'>
        <ThemedSwitch
          text='Dark Mode'
          className='mb-5'
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text='System Default'
          className='mb-5'
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
